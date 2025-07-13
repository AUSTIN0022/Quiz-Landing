const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-100 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* YSM Logo */}
        <div className="mb-4">
          <img 
            src="https://cdn.lugc.link/7ea4da5f-5fdb-4005-9863-6ad2efa5cef9/-/preview/111x56/-/format/auto/" 
            alt="YSM Logo" 
            className="mx-auto w-22 h-11 object-contain"
          />
        </div>
        
        {/* Contact Info */}
        <p className="text-gray-700 text-lg mb-4">
          For more Info Call: +91 86240 93698
        </p>
        
        {/* Privacy Policy */}
        <p className="text-gray-700">
          <a 
            href="https://ysminfosolution.com/privacy-policy" 
            className="text-gray-700 hover:text-gray-900 transition-colors duration-300 underline"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;