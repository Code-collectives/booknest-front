const Footer = () => {
    return (
      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-gray-600 text-sm text-center mb-4">
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have 
              suffered duskam alteration variations of passages.
            </p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-yellow-400 transition">
              Wishlist
            </a>
            <a href="#" className="text-gray-800 hover:text-yellow-400 transition">
              My Account
            </a>
          </div>
        </div>
  
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600 text-sm">
          <p>Copyright © 2024 Boighor. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  