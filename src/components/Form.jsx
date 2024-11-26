import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Navigate to the HomePage and set the default view to Dashboard
    navigate("/homepage", { state: { selectedTab: "dashboard" } });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <label className="text-lg font-medium text-black">Email</label>
        <input
          className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          type="email"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-lg font-medium text-black">Password</label>
        <input
          className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          type="password"
        />
      </div>

      <div className="mt-6 space-y-4">
        <button
          onClick={handleSignIn}
          className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold text-lg hover:bg-blue-600 transition-all duration-200"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Form;
