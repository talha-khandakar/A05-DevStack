import { FaBars } from "react-icons/fa";
import logoImg from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button className="text-3xl text-gray-500 md:hidden">
          <FaBars />
        </button>

        <div>
          <img src={logoImg} alt="Dev Stack" className="w-24" />
        </div>

        <ul className="hidden gap-6 text-sm md:flex">
          <li>
            <a href="" className="text-pink-600">
              Home
            </a>
          </li>

          <li>
            <a href="">Technologies</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>Sign In</button>

          <button className="rounded-full bg-pink-600 px-4 py-2 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
