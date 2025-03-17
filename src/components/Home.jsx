import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Home = () => (
  <section className="flex items-center justify-between h-screen px-16 bg-white text-gold">
    {/* Left Section - Text Content */}
    <div className="max-w-lg">
      <h1 className="text-4xl font-bold">Hi, I'm Emanuel Atua Junior</h1>
      <p className="text-xl mt-4">
        Civil Engineer | Software Engineer | Web Developer | Financial Market Enthusiast
      </p>

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-4">
        <a
          href="https://wa.me/254714056264"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-2 border-gold px-4 py-2 rounded-lg 
                     hover:bg-green-500 hover:text-white transition duration-300"
        >
          <FaWhatsapp size={24} />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/jay_t_fx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-2 border-gold px-4 py-2 rounded-lg 
                     hover:bg-pink-500 hover:text-white transition duration-300"
        >
          <FaInstagram size={24} />
          <span>Instagram</span>
        </a>
      </div>
    </div>

    {/* Right Section - Profile Image */}
    <div className="w-[32rem] h-[32rem] rounded-full overflow-hidden border-4 border-gold">
      <img 
        src="/photos/profile.jpeg" 
        alt="Profile" 
        className="w-full h-full object-cover object-[0px_25%]"
      />
    </div>
  </section>
);

export default Home;
