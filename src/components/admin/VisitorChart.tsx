import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface ChartProps {
  data: { label: string; value: number }[];
  title: string;
}

export default function VisitorChart({ data, title }: ChartProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 600;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    // Clear previous renders
    d3.select(ref.current).selectAll("*").remove();

    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#1e1e1e"); // dark background

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

    container
      .append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .style("fill", "#ccc"); // light label color

    container
      .append("g")
      .call(yAxis)
      .selectAll("text")
      .style("fill", "#ccc");

    // style axis lines
    container.selectAll(".domain, .tick line").attr("stroke", "#555");

    container
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.label)!)
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - margin.top - margin.bottom - y(d.value))
      .attr("fill", "#4ade80"); // a nice green for bars (Tailwind's green-400)
  }, [data]);

  return (
    <div className="bg-black p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      <svg ref={ref}></svg>
    </div>
  );
}
