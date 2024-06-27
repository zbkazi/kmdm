import Dashboard from "@/components/dashboard/Dashboard";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Dashboard title="My Dashboard Title" />
    </div>
  );
};

export default DashboardPage;
