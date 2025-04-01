

const Navbar = () => (
  <nav className="fixed w-full bg-gray-900  text-white py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
