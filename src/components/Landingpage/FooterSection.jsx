import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 text-center bg-gray-900 text-gray-400">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://www.instagram.com/renuthreadarts/" target="_blank" rel="noopener noreferrer"
           className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition">
          <FaInstagram size={22} className="text-white" />
        </a>
        <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition">
          <FaFacebook size={22} className="text-white" />
        </a>
        <a href="https://www.youtube.com/@RenuThreadArts" target="_blank" rel="noopener noreferrer"
           className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition">
          <FaYoutube size={22} className="text-white" />
        </a>
        <a href="#" className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition">
          <FaPinterest size={22} className="text-white" />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Renu Thread & Brush Arts. All rights reserved.</p>
    </footer>
  );
}
