import { useState } from "react";

import SideNavBar from "../components/HomePageComponents/SideNavBar";
import Dashboard from "../components/HomePageComponents/Dashboard";  
import Create from "../components/Create";  
import Profile from "../components/HomePageComponents/Profile";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");  

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
          <div className="flex justify-center items-start h-full mr-40">
            <Create />
          </div>
        )}
         {activeTab === "profile" && (
          <div className="flex justify-center items-start h-full mr-40">
            <Profile />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
