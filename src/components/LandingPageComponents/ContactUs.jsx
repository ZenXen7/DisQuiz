import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; 

const ContactUs = () => {
    return (
      <div id="contact-us" className="h-auto bg-dark py-10"> {/* Reduced py-20 to py-10 */}
        <div className="max-w-6xl mx-auto px-6 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 "> {/* Reduced mb-8 to mb-6 */}
            Contact Us
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto"> {/* Reduced mb-6 to mb-4 */}
            We'd love to hear from you! If you have any questions, suggestions, or feedback, 
            feel free to reach out to us. We're here to help and make your experience better!
          </p>
          <p className="text-lg md:text-xl mb-6">
          
            <a href="mailto:support@disquiz.com" className="underline text-orange-400 hover:text-orange-500">
              support@disquiz.com
            </a>
          </p>
  
          <p className="text-lg md:text-xl mt-4 mb-4">
            Follow us on social media for the latest updates and news:
          </p>
          
          <div className="flex justify-center space-x-6">
            {/* Social Media Links */}
            <a href="https://twitter.com" className="text-white hover:text-blue-400 transition duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://facebook.com" className="text-white hover:text-blue-600 transition duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-pink-600 transition duration-300">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  