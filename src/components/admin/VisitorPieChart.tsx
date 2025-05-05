import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

interface PieChartProps {
    data: { label: string; value: number }[];
    title: string;
}

export default function VisitorPieChart({ data, title }: PieChartProps) {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const width = 400;
        const height = 400;
        const radius = Math.min(width, height) / 2;

        d3.select(ref.current).selectAll("*").remove();

        const svg = d3
            .select(ref.current)
            .attr("width", width)
            .attr("height", height);

        const container = svg
            .append("g")
            .attr("transform", `translate(${width / 2},${height / 2})`);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie<{ label: string; value: number }>().value((d) => d.value);
        const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number }>>()
            .innerRadius(0)
            .outerRadius(radius - 10);

        const tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("background", "#333")
            .style("color", "#fff")
            .style("padding", "6px 10px")
            .style("border-radius", "4px")
            .style("font-size", "12px")
            .style("pointer-events", "none")
            .style("opacity", 0);

        const arcs = container.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g");

        arcs.append("path")
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .attr("d", arc as any)
            .attr("fill", (_, i) => color(String(i)))
            .attr("stroke", "#1e1e1e")
            .attr("stroke-width", 1)
            .on("mouseover", function (_, d) {
                tooltip
                    .style("opacity", 1)
                    .html(`<strong>${d.data.label}</strong>: ${d.data.value} visit(s)`);

                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr("d", d3.arc()
                        .innerRadius(0)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .outerRadius(radius) as any // enlarge arc radius
                    )
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 2);
            })
            .on("mousemove", function (event) {
                tooltip
                    .style("left", event.pageX + 10 + "px")
                    .style("top", event.pageY - 28 + "px");
            })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .on("mouseout", function (_l, _v) {
                tooltip.style("opacity", 0);

                d3.select(this)
                    .transition()
                    .duration(200)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .attr("d", arc as any) // revert to original radius
                    .attr("stroke", "#1e1e1e")
                    .attr("stroke-width", 1);
            });


        arcs.append("text")
            .attr("transform", (d) => `translate(${arc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .attr("fill", "#fff")
            .attr("font-size", "12px")
            .text((d) => d.data.label);

        // Cleanup tooltip on unmount
        return () => {
            tooltip.remove();
        };
    }, [data]);


    return (
        <div className="bg-black p-8 rounded shadow mt-6">
            <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
            <svg ref={ref}></svg>
        </div>
    );
}
