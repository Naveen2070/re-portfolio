import React, { useEffect, useState } from "react";
import VisitorChart from "./VisitorChart";
import VisitorTable from "./VisitorTable";
import { getAll, recentVisitorsCount, totalVisitorsCount, VisitorCollection } from "../../services/VisitorService";

function getMonthlyVisitCounts(visitorInfo: VisitorCollection) {
  const counts: Record<string, number> = {};
  const now = new Date();
  const year = now.getFullYear();

  for (let i = 0; i < 12; i++) {
    const month = new Date(year, i).toLocaleString("default", { month: "short" });
    counts[month] = 0;
  }

  visitorInfo.forEach((v) => {
    const visitDate = new Date(v.visitInUTC);
    if (visitDate.getFullYear() === year) {
      const month = visitDate.toLocaleString("default", { month: "short" });
      counts[month]++;
    }
  });

  return Object.entries(counts).map(([label, value]) => ({ label, value }));
}

function getDailyVisitCounts(visitorInfo: VisitorCollection) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const counts: Record<string, number> = {};
  for (let d = 1; d <= daysInMonth; d++) {
    counts[d.toString()] = 0;
  }

  visitorInfo.forEach((v) => {
    const visitDate = new Date(v.visitInUTC);
    if (
      visitDate.getFullYear() === currentYear &&
      visitDate.getMonth() === currentMonth
    ) {
      const day = visitDate.getDate().toString();
      counts[day]++;
    }
  });

  return Object.entries(counts).map(([label, value]) => ({ label, value }));
}


export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [recent, setRecent] = useState(0);
  const [visitorInfo, setVisitorInfo] = useState<VisitorCollection>([]);

  useEffect(() => {
    async function fetchData() {
      const details = await getAll();

      setVisitorInfo(details);

      const totalCount = await totalVisitorsCount();
      const recentCount = await recentVisitorsCount();

      console.log(details, totalCount, recentCount);

      setTotal(totalCount);
      setRecent(recentCount);
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold text-center">Visitor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black text-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Total Visitors</h2>
          <p className="text-3xl">{total}</p>
        </div>
        <div className="bg-black text-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Visitors in Last 24h</h2>
          <p className="text-3xl">{recent}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VisitorChart
          title="Monthly Visits (Current Year)"
          data={getMonthlyVisitCounts(visitorInfo)}
        />

        <VisitorChart
          title="Daily Visits (Current Month)"
          data={getDailyVisitCounts(visitorInfo)}
        />
      </div>


      <VisitorTable visitorInfo={visitorInfo} />
    </div>
  );
}
