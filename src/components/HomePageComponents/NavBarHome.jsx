import { Menu, X } from "lucide-react";
import { useState } from "react"; 


import logo from "../assets/logo.png";
import profileImage from "../assets/profile-pictures/user6.jpg"; 

const NavBarHome = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight ">Disquiz</span>
          </div>
         
            
         
          <div className="flex items-center space-x-4">
            <img
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-500"
              src={profileImage} 
            />
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarHome;
