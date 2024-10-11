import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactForm = () => {
    return (
      
      <div>
        <Navbar />
        <div className="container mt-[10%] mx-auto text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-gray-600">Have questions? Reach out to us at any time.</p>
        </div>
  
        <div className="mt-8 flex justify-center h-[60vh]">
          <form className="bg-white p-8 rounded shadow-md space-y-4 w-full max-w-md">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" 
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
            />
            <button 
              type="submit" 
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-white font-bold rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default ContactForm;
  