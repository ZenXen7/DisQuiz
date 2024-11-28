import { FaClipboardCheck, FaGift, FaCheckCircle, FaPen } from "react-icons/fa";
import learn from "../../assets/learn.png";
import { useState } from "react";
import ProfilePageEdit from "../ProfileComponents/ProfilePageEdit";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  if (isEditing) {
    return <ProfilePageEdit />;
  }



  return (
    <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-md max-w-7xl mx-auto mt-16">
      <div className="flex flex-col lg:flex-row gap-8">
     
        <div className="flex-1">
      
          <div className="flex items-center space-x-4">
            <img
              src={learn}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-700 object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold flex">Michael Clifford
               <FaPen
                  className="text-blue-500 text-2xl ml-8 mt-1 cursor-pointer"
                  onClick={handleEditClick}
                />
              </h1>
              
              <p className="text-gray-400 text-sm">Level 1</p>
            </div>
          </div>

    
          <div className="mt-4 space-y-5">
          
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden mt-10">
              <div className="bg-blue-500 h-2" style={{ width: "65%" }}></div>
            </div>
            <p className="text-gray-400 text-sm mt-1">65%</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            {[
              {
                icon: <FaClipboardCheck className="text-blue-500 text-2xl" />,
                label: "Quizzes Passed",
                value: "27",
              },
              {
                icon: <FaGift className="text-green-500 text-2xl" />,
                label: "Points Earned",
                value: "30",
              },
              {
                icon: <FaCheckCircle className="text-yellow-500 text-2xl" />,
                label: "Correct Answers",
                value: "200",
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  {stat.icon}
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Achievements</h2>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {["Silver", "Silver", "Gold", "Gold", "Bronze", "Bronze"].map((tier, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700 shadow-md"
                >
                  <div className="flex justify-center mb-3">
                    <span
                      className={`text-4xl ${
                        tier === "Gold"
                          ? "text-yellow-500"
                          : tier === "Silver"
                          ? "text-gray-400"
                          : "text-orange-500"
                      }`}
                    >
                      🏅
                    </span>
                  </div>
                  <p className="font-bold">{tier} Tier</p>
                  <p className="text-gray-400 text-sm">Score 80% on 5 quizzes</p>
                </div>
              ))}
            </div>
          </div>
        </div>

  
        <div className="lg:w-1/3 ml-24">
          <h2 className="text-xl font-semibold">Reminders</h2>
          <ul className="mt-4 space-y-4">
            {[
              { title: "Control Your Account", due: "Due Today" },
              { title: "Clear Desk Policy", due: "Due Next Week" },
              { title: "Quiz #1", due: "Due Next Week" },
              { title: "Use of Flash Drive", due: "Due October 20" },
            ].map((reminder, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-red-600 p-4 rounded-lg border border-gray-700 shadow-md"
              >
                <span>{reminder.title}</span>
                <span className="text-gray-400 text-sm">{reminder.due}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
