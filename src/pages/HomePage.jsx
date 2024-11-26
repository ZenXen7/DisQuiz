import { useState } from "react";

import SideNavBar from "../components/HomePageComponents/SideNavBar";
import Dashboard from "../components/HomePageComponents/Dashboard";  
import Create from "../components/Create";  
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");  // Default active tab is "dashboard"

  const handleTabChange = (tab) => {
    setActiveTab(tab);  
  };

  return (
    <div className="home-page flex h-screen">
      <SideNavBar activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="flex-1 p-6 overflow-auto">
        {activeTab === "dashboard" && (
          <div className="flex justify-center items-center h-full">
            <Dashboard />
          </div>
        )}
        {activeTab === "create" && (
          <div className="flex justify-center items-center h-full">
            <Create />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
