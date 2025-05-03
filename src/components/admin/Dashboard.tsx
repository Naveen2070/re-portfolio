import React, { useEffect, useState } from "react";
import VisitorChart from "./VisitorChart";
import VisitorTable from "./VisitorTable";
import { getAll, recentVisitorsCount, totalVisitorsCount } from "../../services/VisitorService";

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [recent, setRecent] = useState(0);
  const [visitorInfo, setVisitorInfo] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const details = await getAll();
      console.log(details);

      setVisitorInfo(details);

      const totalCount = await totalVisitorsCount();
      const recentCount = await recentVisitorsCount();

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

      <VisitorChart />
      <VisitorTable visitorInfo={visitorInfo} />
    </div>
  );
}
