import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-black p-3 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section — Logo / Brand */}
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h2 className="text-2xl font-bold tracking-wide">Jobpoint</h2>
          <p className="text-sm text-gray-800">Find your dream job faster and smarter 🚀</p>
        </div>

        

        {/* Right Section — Copyright */}
        <div className="text-sm text-gray-900 mt-4 md:mt-0 text-center">
          © {new Date().getFullYear()} <span className="font-semibold">Jobpoint</span>. All Rights Reserved.
          <p className="text-sm">Made with ❤️ by Gagan !!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
