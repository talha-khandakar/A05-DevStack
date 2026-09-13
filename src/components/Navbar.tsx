import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-16">
        <div className="hidden md:grid grid-cols-3 h-full items-center">
          <div className="flex justify-start">
            <img src={Logo} alt="Dev Stack" className="h-10" />
          </div>

          <div className="flex items-center justify-center gap-7">
            <a href="#" className="text-pink-600">
              Home
            </a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex items-center justify-end gap-5">
            <button>Sign In</button>
            <button className="bg-pink-600 text-white px-5 py-2.5 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 h-full items-center md:hidden">
          <div className="flex justify-start">
            <FaBars className="text-xl" />
          </div>

          <div className="flex justify-center">
            <img src={Logo} alt="Dev Stack" className="h-9" />
          </div>

          <div className="flex items-center justify-end gap-2">
            <button className="text-sm">Sign In</button>
            <button className="bg-pink-600 text-white px-3 py-2 rounded-full text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
