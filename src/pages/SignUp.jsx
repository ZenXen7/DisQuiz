import { Link } from 'react-router-dom'; 
import FormSignUp from "../components/FormSignUp"; 

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
    
      <div className="flex-1 bg-cover bg-center">
        <div className="flex justify-center items-center h-full bg-dark bg-opacity-60">
          <div className="text-white text-center">
            <h1 className="text-8xl bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">Disquiz</h1>
          
          </div>
        </div>
      </div>

 
      <div className="flex-1 flex justify-center items-center bg-white p-6">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-black mb-6">Register</h2>
        

         
          <FormSignUp />

       
         

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">Already have an account?  
              <Link to="/login" className="ml-2 font-semibold text-blue-500 hover:underline">
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
