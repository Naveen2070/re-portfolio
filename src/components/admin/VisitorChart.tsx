import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const data = [10, 15, 30, 20, 25, 5, 12]; // Example data

export default function VisitorChart() {
  const ref = useRef(null);

  useEffect(() => {
    const svg = d3.select(ref.current).attr("width", 500).attr("height", 200);

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d) => 200 - d * 5)
      .attr("width", 50)
      .attr("height", (d) => d * 5)
      .attr("fill", "steelblue");
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Visitor Activity</h2>
      <svg ref={ref}></svg>
    </div>
  );
}
