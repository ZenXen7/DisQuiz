import { Link } from 'react-router-dom'; // Import Link for navigation
import FormSignUp from "../components/FormSignUp"; // Correct path to FormSignUp component

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      
      {/* Left side image background */}
      <div className="flex-1 bg-cover bg-center">
        <div className="flex justify-center items-center h-full bg-dark bg-opacity-60">
          <div className="text-white text-center">
            <h1 className="text-8xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Disquiz</h1>
          
          </div>
        </div>
      </div>

 
      <div className="flex-1 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-black mb-6">Register</h2>
        

          {/* Form Component */}
          <FormSignUp />

          {/* Account Type Dropdown */}
         

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">Already have an account?  
              <Link to="/login" className="ml-2 font-semibold text-orange-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
