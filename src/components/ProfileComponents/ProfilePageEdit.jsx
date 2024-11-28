import { FaUser, FaEnvelope, FaKey, FaMapMarkerAlt, FaPhone, FaCalendarAlt, FaPen } from "react-icons/fa";
import userImage from '../../assets/profile-pictures/user1.jpg';

const ProfilePageEdit = () => {
  return (
    <div className="bg-gray-800 text-white w-full h-full p-8 rounded-lg shadow-lg">
 
      <div
        className="relative bg-gray-900 rounded-lg mb-10 p-8"
        style={{
            background: `url(${userImage}) no-repeat center center / cover`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

        <button className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700">
          <FaPen /> 
          <span>Change Banner</span>
        </button>

        <div className="relative flex items-center space-x-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-gray-800"
          />
          <div>
            <h2 className="text-2xl font-semibold">Michael Clifford</h2>
            <p className="text-gray-400 mt-1">Kingston, New York</p>
          </div>
        </div>
        <div className="relative flex space-x-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700">
            Upload New Photo
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md shadow hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaUser className="mr-2" /> Full Name
          </h3>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              defaultValue="Michael"
              className="w-1/2 bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              defaultValue="Clifford"
              className="w-1/2 bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaEnvelope className="mr-2" /> Contact Email
          </h3>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Email"
              defaultValue="MichaelClifford@gmail.com"
              className="flex-grow bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-500">
              Add Email
            </button>
          </div>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaKey className="mr-2" /> Password
          </h3>
          <div className="flex items-center space-x-4">
            <input
              type="password"
              placeholder="Current Password"
              defaultValue="************"
              className="flex-grow bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-500">
              Change Password
            </button>
          </div>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Address
          </h3>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Current Address"
              defaultValue="132 My Street, Kingston, New York 12401."
              className="flex-grow bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-500">
              Change Address
            </button>
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaPhone className="mr-2" /> Phone Number
          </h3>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              defaultValue="+1 234 567 8901"
              className="w-full bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FaCalendarAlt className="mr-2" /> Age
          </h3>
          <div>
            <input
              type="number"
              placeholder="Age"
              defaultValue="29"
              className="w-full bg-gray-700 p-4 rounded-md border border-gray-600 focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">
          Ensure all information is accurate before saving.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-500">
            Cancel
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageEdit;
