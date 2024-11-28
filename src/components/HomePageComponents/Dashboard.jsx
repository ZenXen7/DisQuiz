/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'; 
import { FaCheckCircle, FaBell, FaTrophy, FaStar } from 'react-icons/fa'; 
import flashCardsImage from "../../assets/flashCards.png"; 
import { useNavigate } from "react-router-dom";

import dash from "../../assets/dashImage.png"; 

import Math from "../../assets/math.jpg"; 
import Math2 from "../../assets/math2.jpg"; 

const Cards = ({ title, image, bgColor, type,  onClick }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between items-center p-4 w-full h-80 ${bgColor} shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
      onClick={onClick}
    >
      <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
      <div className="w-full h-full mb-4">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <div className="justify-between flex-row">
     
      <p1 className="font-bold">{type}</p1>
      </div>
     
    </div>
  );
};

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-3/5 mb-6 lg:mb-0 mr-10">
          <div className="sticky top-0 z-10 pb-2">
            <h2 className="text-4xl font-semibold mb-4">Explore</h2>
          </div>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-h-[80vh] overflow-y-auto scrollbar-custom  0 rounded-xl p-2">
          <Cards
            title="Algebra Quiz"
            image={Math2}
            bgColor="bg-blue-600"
            onClick={() => handleCardClick("/tf-quiz")}
            type="Flashcard"
          />
            <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-green-600"
              onClick={handleCardClick}
              type="True or False"
            />
             <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-red-600"
              onClick={handleCardClick}
              type="True or False"
            />
             <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-indigo-600"
              onClick={handleCardClick}
              type="True or False"
            />
             <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-gray-600"
              onClick={handleCardClick}
              type="True or False"
            />
             <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-pink-600"
              onClick={handleCardClick}
              type="True or False"
            />
              <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-pink-600"
              onClick={handleCardClick}
              type="True or False"
            />
              <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-pink-600"
              onClick={handleCardClick}
              type="True or False"
            />
              <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-pink-600"
              onClick={handleCardClick}
              type="True or False"
            />
              <Cards
              title="Explore Quiz 2"
              image="https://via.placeholder.com/150"
              bgColor="bg-pink-600"
              onClick={handleCardClick}
              type="True or False"
            />
          
        
          </div>
        </div>

     
        <div className="w-full lg:w-2/5 flex flex-col space-y-6">
      
          <div className="bg-red-600 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center space-x-2">
              <FaBell className="text-yellow-500" /> <span>Reminders</span>
            </h2>
            <ul className="space-y-4 text-white">
              <li className="flex justify-between items-center">
                <span>Complete the quiz</span>
                <button className="text-blue-500 flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Mark as Done</span>
                </button>
              </li>
              <li className="flex justify-between items-center">
                <span>Prepare for the test</span>
                <button className="text-blue-500 flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Mark as Done</span>
                </button>
              </li>
            </ul>
          </div>

       
          <div className="bg-zinc-200 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-black flex items-center space-x-2">
              <FaTrophy className="text-yellow-500" /> <span>Achievements</span>
            </h2>
            <ul className="space-y-4 text-black">
              <li className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">Completed first quiz.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaStar className="text-yellow-400" />
                <span className="font-semibold">Scored 100% on the test.</span>
              </li>
            </ul>
            
          </div>
          <div>
         
        </div>
        </div>

       
      </div>
      
    </div>
  );
};

export default Dashboard;
