import React from "react";
import { motion } from "framer-motion";
import PipelineBoard from "../components/Dashboard/PipelineBoard";
import NewCustomersChart from "../components/Dashboard/NewCustomersChart";
import CircularProgress from "../components/Dashboard/CircularProgress";
import StatsCard from "../components/Dashboard/StatsCard";
import { useAppSelector } from "../store";

const Dashboard: React.FC = () => {
  const { stats } = useAppSelector((state) => state.dashboard);

  const dashboardItems = [
    {
      id: "chart",
      component: <NewCustomersChart />,
    },
    {
      id: "progress",
      component: (
        <CircularProgress
          percentage={stats.successfulDeals}
          title="Successful deals"
          subtitle=""
        />
      ),
    },
    {
      id: "tasks",
      component: (
        <StatsCard
          title="Tasks"
          value={stats.tasksInProgress.toString()}
          subtitle="in progress"
          showArrow
        />
      ),
    },
    {
      id: "prepayments",
      component: (
        <StatsCard
          title="Prepayments"
          value={`$${stats.prepayments.toLocaleString()}`}
          subtitle="from customers"
          showArrow
        />
      ),
    },
  ];

  return (
    <div className="-mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-green-200/30 rounded-lg p-4">
        {dashboardItems.map((item, index) => {
          const isLeft = index < dashboardItems.length / 2;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.component}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6">
        <PipelineBoard />
      </div>
    </div>
  );
};

export default Dashboard;
