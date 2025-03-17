import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const [notification, setNotification] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotification("Your message has been sent successfully!");
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white text-blue-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section - Contact Info */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg mb-2">Email: emanuelatua7@gmail.com</p>
          <p className="text-lg mb-2">Phone: 0714056264</p>
          <p className="text-lg">Follow me on social media:</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://www.facebook.com/EmanuelJunior" className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com/emanuelatua7@gmail.com" className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/jayunderscoretunderscorefx" className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://wa.me/0714056264" className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@emanueljunior1936" className="text-blue-500 hover:text-blue-700 text-2xl">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-4xl font-bold mb-4">Send me a message</h2>
          <form
            action="https://formspree.io/f/mdkekdjz"
            method="POST"
            className="max-w-lg mx-auto md:mx-0"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input id="name" name="name" type="text" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Send Message
            </button>
            {notification && <p className="mt-4 text-green-600 font-semibold">{notification}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
