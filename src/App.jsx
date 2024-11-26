import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/LandingPageComponents/Hero";
import Card from "./components/LandingPageComponents/Cards";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AboutUs from "./components/LandingPageComponents/AboutUs";
import HomePage from "./pages/HomePage";
import ContactUs from "./components/LandingPageComponents/ContactUs";
import flashCards from "./assets/flashCards.png";
import studyGuides from "./assets/studyGuides.png";
import practiceTests from "./assets/practiceTests.png";
import learn from "./assets/learn.png";

const App = () => {
  const cardData = [
    {
      title: "Flash Cards",
      image: flashCards,
      bgColor: "bg-indigo-700",
    },
    {
      title: "Study Guides",
      image: studyGuides,
      bgColor: "bg-pink-400",
    },
    {
      title: "Practice Tests",
      image: practiceTests,
      bgColor: "bg-orange-300",
    },
    {
      title: "Learn",
      image: learn,
      description: "Review and memorize concepts.",
      bgColor: "bg-sky-300",
    },
  ];

  return (
    <Router>
      <Routes>
        {/* Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="max-w-7xl mx-auto pt-20 px-6">
                <Hero />
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {cardData.map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      image={card.image}
                      description={card.description}
                      bgColor={card.bgColor}
                    />
                  ))}
                </div>
              </div>
              <AboutUs />
             
              <ContactUs />

            </>
          }
        />

     
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
       


      </Routes>
    </Router>
  );
};

export default App;
