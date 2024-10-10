import { Link } from 'react-router-dom';
import { BsTelephonePlusFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="bg-white h-[10vh] fixed w-full top-0 z-20 shadow-md flex items-center">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        <div className="flex items-center">
          <img 
            className="h-[80px] w-auto" 
            src="src/assets/images/pagelogo.png" 
            alt="Logo" 
          />
        </div>

  
        <div className="hidden md:flex gap-x-8 items-center">
          <Link to="/" className="text-black hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/aboutus" className="text-black hover:text-yellow-400 transition duration-300">About Us</Link>
          <Link to="/contactUs" className="text-black hover:text-yellow-400 transition duration-300">Contact Us</Link>
          <Link to="/viewlist" className="text-black hover:text-yellow-400 transition duration-300">View</Link>
        </div>

      
        <div className="flex items-center text-black">
          <span className="text-xl pr-2 text-yellow-400">
            <BsTelephonePlusFill />
          </span>
          <h1 className="text-black text-lg">+233 26 052 7007</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
