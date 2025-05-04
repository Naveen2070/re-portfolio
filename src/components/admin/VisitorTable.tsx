import React from "react";
import { VisitorCollection } from "../../services/VisitorService";

export default function VisitorTable({ visitorInfo }: { visitorInfo: VisitorCollection }) {
  return (
    <div className="bg-black text-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Visitor Details</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Visitor ID</th>
            <th className="border px-4 py-2">Visit Count</th>
            <th className="border px-4 py-2">Visit (IST)</th>
            <th className="border px-4 py-2">Recent Visit</th>
            <th className="border px-4 py-2">OS</th>
            <th className="border px-4 py-2">Browser</th>
            <th className="border px-4 py-2">Language</th>
            <th className="border px-4 py-2">Timezone</th>
            <th className="border px-4 py-2">Is Mobile</th>
          </tr>
        </thead>
        <tbody>
          {visitorInfo.map((visitor, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{visitor.otherDetails.visitorId}</td>
              <td className="border px-4 py-2">{visitor.visitCount ?? 'N/A'}</td>
              <td className="border px-4 py-2">{visitor.visitInIST}</td>
              <td className="border px-4 py-2">{new Date(visitor.recentVisit).toLocaleString('en-US', { timeZone: 'Asia/Kolkata', formatMatcher: 'best fit' }) ?? 'N/A'}</td>
              <td className="border px-4 py-2">{visitor.otherDetails.os}</td>
              <td className="border px-4 py-2">{visitor.otherDetails.browser}</td>
              <td className="border px-4 py-2">{visitor.otherDetails.language}</td>
              <td className="border px-4 py-2">{visitor.otherDetails.timezone}</td>
              <td className="border px-4 py-2">{visitor.otherDetails.isMobile ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
