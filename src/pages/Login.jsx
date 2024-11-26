import { Link } from 'react-router-dom';
import Form from "../components/Form"; 

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-dark">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">Welcome Back</h1>
        <p className="text-lg text-center text-gray-500 mb-8">Please enter your details to sign in.</p>

        <Form />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Dont have an account?  
           
            <Link to="/signup" className="ml-2 font-semibold text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
