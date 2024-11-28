import  { useState } from 'react';
import { FaPlus, FaQuestionCircle } from 'react-icons/fa';

const Create = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [quizType, setQuizType] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [questions, setQuestions] = useState([{ question: '', answer: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quizTitle && quizType) {
      console.log('Quiz Created:', {
        title: quizTitle,
        type: quizType,
        description: quizDescription,
        questions: quizType === 'true-false' ? questions : undefined,
      });
      setSuccessMessage('Quiz created successfully!');
      setQuizTitle('');
      setQuizType('');
      setQuizDescription('');
      setQuestions([{ question: '', answer: '' }]);
    } else {
      setSuccessMessage('Please fill out all required fields.');
    }
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', answer: '' }]);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="p-6 h-screen overflow-y-auto bg-dark">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Section: Quiz Creation Form */}
        <div className="w-full lg:w-3/5 mb-6 lg:mb-0 mr-10">
          <div className="top-0 z-10 pb-2">
            <h2 className="text-4xl font-semibold mb-4">Create a Quiz</h2>
          </div>

          <div className="bg-gray-300 p-6 shadow-lg rounded-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-h-[70vh] overflow-y-auto scrollbar-custom"
            >
         
              <div>
                <label
                  htmlFor="quizTitle"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Quiz Title
                </label>
                <input
                  type="text"
                  id="quizTitle"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                  placeholder="Enter quiz title"
                  className="w-full p-3 border border-gray-300 bg-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

         
              <div>
                <label
                  htmlFor="quizType"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Quiz Type
                </label>
                <select
                  id="quizType"
                  value={quizType}
                  onChange={(e) => setQuizType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select quiz type</option>
           
                  <option value="true-false">True/False</option>
                </select>
              </div>

          
              <div>
                <label
                  htmlFor="quizDescription"
                  className="block text-lg font-medium mb-2 text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="quizDescription"
                  value={quizDescription}
                  onChange={(e) => setQuizDescription(e.target.value)}
                  rows="4"
                  placeholder="Write a brief description of the quiz"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {quizType === 'true-false' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">True/False Questions</h3>
                  {questions.map((q, index) => (
                    <div key={index} className="space-y-2">
                      <input
                        type="text"
                        value={q.question}
                        onChange={(e) =>
                          handleQuestionChange(index, 'question', e.target.value)
                        }
                        placeholder={`Question ${index + 1}`}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <select
                        value={q.answer}
                        onChange={(e) =>
                          handleQuestionChange(index, 'answer', e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select answer</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                      {questions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeQuestion(index)}
                          className="text-red-600 text-sm"
                        >
                          Remove Question
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addQuestion}
                    className="text-blue-600 text-sm"
                  >
                    + Add Another Question
                  </button>
                </div>
              )}

          
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
              >
                <FaPlus className="mr-2" /> Create Quiz
              </button>
            </form>

      
            {successMessage && (
              <p
                className={`mt-4 text-center text-lg font-semibold ${
                  successMessage.includes('successfully')
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {successMessage}
              </p>
            )}
          </div>
        </div>

    
        <div className="w-full lg:w-2/5 flex flex-col space-y-6 mt-16">
          <div className="bg-blue-100 p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center space-x-2">
              <FaQuestionCircle /> <span>Quiz Tips</span>
            </h2>
            <ul className="space-y-4 text-blue-900">
              <li className="font-medium">Keep questions clear and concise.</li>
              <li className="font-medium">Use images to make questions engaging.</li>
              <li className="font-medium">
                Select the right type for the content (e.g., flashcards for quick recall).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
