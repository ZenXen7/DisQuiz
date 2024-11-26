import { useState } from "react";

import SideNavBar from "../components/SideNavBar";
import Dashboard from "../components/Dashboard";  // Import the Dashboard component
import Create from "../components/Create";  // Import the Create component (as an example)

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");  // Default active tab is "dashboard"

  const handleTabChange = (tab) => {
    setActiveTab(tab);  // Update the active tab when sidebar item is clicked
  };

  return (
    <div className="home-page flex h-screen">
      {/* SideNavBar takes a fixed width */}
      <SideNavBar activeTab={activeTab} onTabChange={handleTabChange} />
      
      {/* Main content takes up the remaining space */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Conditionally render the active component */}
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
        {/* Add other components here based on activeTab */}
      </div>
    </div>
  );
};

export default HomePage;
