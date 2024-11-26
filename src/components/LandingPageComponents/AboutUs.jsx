import flashCardsImage from "../../assets/flashCards.png";

const AboutUs = () => {
    return (
      <div id="about-us" className="min-h-screen bg-dark py-20"> {/* Added id="about-us" */}
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-6">About DisQuiz</h1>
            <p className="text-lg mb-6">
              DisQuiz is a dynamic web application designed to enhance your learning experience through interactive quizzes. 
              Whether youre preparing for an exam, testing your knowledge, or just having fun, DisQuiz offers a variety of quizzes 
              across different subjects to challenge and engage you.
            </p>
            <p className="text-lg mb-8">
              With an intuitive interface and engaging quiz formats, DisQuiz helps users improve their knowledge while tracking 
              their progress. Our goal is to make learning both fun and effective for everyone!
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full mt-4">
              Learn more
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <img
               src={flashCardsImage} // Use the imported image
               alt="DisQuiz Illustration"
               className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    );
};

export default AboutUs;
