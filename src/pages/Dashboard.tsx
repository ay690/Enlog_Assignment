import React from "react";
import PipelineBoard from "../components/Dashboard/PipelineBoard";
import NewCustomersChart from "../components/Dashboard/NewCustomersChart";
import CircularProgress from "../components/Dashboard/CircularProgress";
import StatsCard from "../components/Dashboard/StatsCard";
import { useAppSelector } from "../store";

const Dashboard: React.FC = () => {
  const { stats } = useAppSelector((state) => state.dashboard);

  return (
    <div className="-mt-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-green-200/30">
        <NewCustomersChart />
        <CircularProgress
          percentage={stats.successfulDeals}
          title="Successful deals"
          subtitle=""
        />
        <StatsCard
          title="Tasks"
          value={stats.tasksInProgress.toString()}
          subtitle="in progress"
          showArrow={true}
        />
        <StatsCard
          title="Prepayments"
          value={`$ ${stats.prepayments.toLocaleString()}`}
          subtitle="from customers"
          showArrow={true}
        />
      </div>
      <PipelineBoard />
    </div>
  );
};

export default Dashboard;
