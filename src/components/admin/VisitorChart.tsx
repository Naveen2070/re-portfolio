import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface ChartProps {
  data: { label: string; value: number }[];
  title: string;
}

export default function VisitorChart({ data, title }: ChartProps) {
  const ref = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const width = 600;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 60, left: 50 }; // Increased bottom for rotated labels

    d3.select(ref.current).selectAll("*").remove();

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#1e1e1e");

    const container = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width - margin.left - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .nice()
      .range([height - margin.top - margin.bottom, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const xAxisGroup = container
      .append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    xAxisGroup
      .selectAll("text")
      .style("fill", "#ccc")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", "0.15em")
      .attr("transform", "rotate(-60)");

    container
      .append("g")
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#ccc");

    container.selectAll(".domain, .tick line").attr("stroke", "#555");

    // Tooltip
    const tooltip = d3.select(tooltipRef.current);

    // Bars
    container
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.label)!)
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.top - margin.bottom - y(d.value))
      .attr("fill", "#4ade80")
      .on("mouseover", function (_, d) {
        tooltip
          .style("opacity", 1)
          .html(`<strong>${d.label}</strong><br/>Visits: ${d.value}`);

        d3.select(this)
          .attr("fill", "#22c55e") // brighter green on hover
          .attr("stroke", "#fff")
          .attr("stroke-width", 1);
      })
      .on("mousemove", (event) => {
        const [xPos, yPos] = d3.pointer(event);

        tooltip
          .style("left", `${xPos + margin.left + 20}px`)
          .style("top", `${yPos + margin.top}px`);
      })
      .on("mouseout", function () {
        tooltip.style("opacity", 0);

        d3.select(this)
          .attr("fill", "#4ade80")
          .attr("stroke", "none");
      });
  }, [data]);

  return (
    <div className="relative bg-black p-4 rounded shadow mt-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      <svg ref={ref}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          pointerEvents: "none",
          backgroundColor: "#333",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: "4px",
          fontSize: "0.875rem",
          opacity: 0,
          transition: "opacity 0.2s ease",
          zIndex: 10,
        }}
      />
    </div>
  );
}
