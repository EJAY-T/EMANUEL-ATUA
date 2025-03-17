import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-lg font-semibold">Jay T Forex Hub</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
        </div>
        <p className="mt-3 text-sm">© 2025 Jay T Forex Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;