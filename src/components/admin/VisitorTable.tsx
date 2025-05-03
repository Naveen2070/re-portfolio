import React from "react";

export default function VisitorTable({ visitorInfo }: { visitorInfo: any }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Visitor Details</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            {visitorInfo.length > 0 &&
              Object.keys(visitorInfo[0]).map((key) => (
                <th key={key} className="border px-4 py-2">{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {visitorInfo.map((visitor, index) => (
            <tr key={index}>
              {Object.values(visitor).map((value, idx) => (
                <td key={idx} className="border px-4 py-2">{value?.toString()}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
