/* eslint-disable react/prop-types */
import { FaHome, FaPen, FaBell, FaTrophy, FaHistory } from 'react-icons/fa';

const SideNavBar = ({ activeTab, onTabChange }) => {
    const isSelected = (tab) => (activeTab === tab ? 'bg-white text-blue-600' : 'hover:bg-white hover:text-blue-600');
  
    return (
      <div className="flex flex-col w-64 h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 rounded-r-3xl shadow-lg">
        <div className="mb-10">
          <div className="text-3xl font-semibold text-white">Disquiz</div>
        </div>
  
        <ul className="flex flex-col space-y-6">
          <li>
            <button 
              onClick={() => onTabChange("dashboard")}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${isSelected("dashboard")}`}
            >
              <FaHome className="text-xl" />
              <span className="text-lg font-medium">Dashboard</span>
            </button>
          </li>
  
          <li>
            <button 
              onClick={() => onTabChange("create")}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${isSelected("create")}`}
            >
              <FaPen className="text-xl" />
              <span className="text-lg font-medium">Create</span>
            </button>
          </li>
  
          <li>
            <button 
              onClick={() => onTabChange("notifications")}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${isSelected("notifications")}`}
            >
              <FaBell className="text-xl" />
              <span className="text-lg font-medium">Notifications</span>
            </button>
          </li>
  
          <li>
            <button 
              onClick={() => onTabChange("achievements")}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${isSelected("achievements")}`}
            >
              <FaTrophy className="text-xl" />
              <span className="text-lg font-medium">Achievements</span>
            </button>
          </li>
  
          <li>
            <button 
              onClick={() => onTabChange("quiz-history")}
              className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out ${isSelected("quiz-history")}`}
            >
              <FaHistory className="text-xl" />
              <span className="text-lg font-medium">Quiz History</span>
            </button>
          </li>
        </ul>
  
        <div className="mt-auto pt-10 text-sm text-center text-gray-300">
          <span>&copy; 2024 Disquiz. All Rights Reserved.</span>
        </div>
      </div>
    );
  };
  
  export default SideNavBar;