import { FaBars } from "react-icons/fa";
import logoImg from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-4">
        <button className="mr-3 shrink-0 text-3xl text-gray-500 md:hidden">
          <FaBars />
        </button>

        <div className="flex-1">
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <button className="text-sm">Sign In</button>

          <button className="rounded-full bg-pink-600 px-3 py-2 text-sm text-white sm:px-4">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
