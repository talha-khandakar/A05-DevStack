import FooterImg from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="bg-white p-5 pt-10 mx-auto  max-w-6xl">
      <div className="  flex flex-col gap-10 md:flex-row md:gap-0">
        <div className="w-full md:w-1/2">
          <img src={FooterImg} alt="DevStack Logo" className="h-10 mb-3 w-24" />

          <p className="text-gray-500 text-sm mb-4 w-80 max-w-full">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-4">
            <a href="" className="font-bold text-sm">
              GitHub
            </a>
            <a href="" className="font-bold text-sm">
              Twitter
            </a>
            <a href="" className="font-bold text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex w-full justify-between gap-6 md:w-1/2">
          <div>
            <h4 className="font-bold text-xs mb-3">PRODUCT</h4>
            <div className="text-sm text-gray-500">
              <p className="mb-2">
                <a href="">Home</a>
              </p>
              <p className="mb-2">
                <a href="">Technologies</a>
              </p>
              <p className="mb-2">
                <a href="">Projects</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-3">COMPANY</h4>
            <div className="text-sm text-gray-500">
              <p className="mb-2">
                <a href="">About</a>
              </p>
              <p className="mb-2">
                <a href="">Contact</a>
              </p>
              <p className="mb-2">
                <a href="">Careers</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-3">LEGAL</h4>
            <div className="text-sm text-gray-500">
              <p className="mb-2">
                <a href="">Privacy Policy</a>
              </p>
              <p className="mb-2">
                <a href="">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-200" />

      <div className="flex flex-col gap-4 text-xs text-gray-400 sm:flex-row sm:justify-between">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </footer>
  );
}
