const FormSignUp = () => {
  return (
    <form className="space-y-4">
     
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="text-base font-medium text-black">First Name</label>
          <input 
            className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your first name"
            type="text"
          />
        </div>
        <div className="flex-1">
          <label className="text-base font-medium text-black">Last Name</label>
          <input 
            className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your last name"
            type="text"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-base font-medium text-black">Email</label>
        <input 
          className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          type="email"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label className="text-base font-medium text-black">Password</label>
        <input 
          className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          type="password"
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-col">
        <label className="text-base font-medium text-black">Confirm Password</label>
        <input 
          className="w-full border-2 rounded-lg p-4 mt-2 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Confirm your password"
          type="password"
        />
      </div>

      <div className="mt-6 pb-3">
            <label className="text-base font-medium text-black mb-2">Account Type</label>
            <select className="w-full border-2 rounded-lg p-4 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="personal">Student</option>
              <option value="business">Drug Dealer</option>
             
            </select>
          </div>

      {/* Terms and Conditions */}
      <div className="flex items-center pb-5">
        <input type="checkbox" className="mr-2" />
        <label className="text-sm text-gray-500">I accept the <span className="text-blue-500 hover:underline">Terms of Use & Privacy Policy</span></label>
      </div>

      {/* Submit Button */}
      <button className="w-full py-4 bg-blue-500 text-white rounded-xl font-semibold text-base hover:bg-blue-600 transition-all duration-200">
        Register Now
      </button>
    </form>
  );
};

export default FormSignUp;
