import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TFQuiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const questions = [
    { question: "Algebra is the branch of mathematics that deals with symbols.", correctAnswer: "True" },
    { question: "The square root of 16 is 5.", correctAnswer: "False" },
    { question: "Pi is approximately equal to 3.14.", correctAnswer: "True" },
    { question: "The equation x^2 + 4 = 0 has real solutions.", correctAnswer: "False" },
    { question: "The Pythagorean theorem applies to all triangles.", correctAnswer: "False" },
    { question: "A rectangle has four right angles.", correctAnswer: "True" },
    { question: "2+2 equals 5.", correctAnswer: "False" },
    { question: "The sun is a star.", correctAnswer: "True" },
    { question: "Water boils at 100°C at standard atmospheric pressure.", correctAnswer: "True" },
    { question: "Electricity is measured in kilograms.", correctAnswer: "False" },
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      setSelectedAnswer(null);
      if (questionIndex < questions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const goToNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const goToPreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const goBackToDashboard = () => {
    navigate("/homepage"); // Adjust the path as needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6 relative">
     
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transform hover:scale-105"
        onClick={goBackToDashboard}
      >
        Back to Homepage
      </button>

 
      <div className="bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-3xl">
        {quizCompleted ? (
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-green-400 mb-4">Quiz Completed!</h1>
            <p className="text-lg text-gray-300">Great job! You have answered all the questions.</p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-semibold text-center text-yellow-400 mb-6">
              True or False Quiz
            </h1>
            <div className="text-center mb-6">
              <p className="text-lg font-medium text-white">
                Question {questionIndex + 1} of {questions.length}
              </p>
              <p className="text-xl font-medium text-gray-300 mt-4">
                {questions[questionIndex].question}
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <button
                className={`px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 ${
                  selectedAnswer === "True" && "ring-4 ring-green-300"
                }`}
                onClick={() => handleAnswer("True")}
                disabled={quizCompleted}
              >
                True
              </button>
              <button
                className={`px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 ${
                  selectedAnswer === "False" && "ring-4 ring-red-300"
                }`}
                onClick={() => handleAnswer("False")}
                disabled={quizCompleted}
              >
                False
              </button>
            </div>

            {selectedAnswer && (
              <div
                className={`mt-6 text-center font-medium ${
                  selectedAnswer === questions[questionIndex].correctAnswer
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {selectedAnswer === questions[questionIndex].correctAnswer ? (
                  <div className="flex items-center justify-center space-x-2">
                    <FaCheckCircle />
                    <span>Correct!</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <FaTimesCircle />
                    <span>Incorrect!</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md transform hover:scale-105 disabled:opacity-50"
                onClick={goToPreviousQuestion}
                disabled={questionIndex === 0}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md transform hover:scale-105 disabled:opacity-50"
                onClick={goToNextQuestion}
                disabled={questionIndex === questions.length - 1}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TFQuiz;
