import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="md:hidden">
          <FaBars className="text-xl" />
        </div>

        <div className="flex items-center">
          <img src={Logo} alt="Dev Stack" className="h-10" />
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-8">
            <a href="#" className="text-pink-600">
              Home
            </a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex items-center gap-6 ml-8">
            <button>Sign In</button>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button>Sign In</button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
