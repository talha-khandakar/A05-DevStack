import FooterImg from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl bg-white p-4 pt-10 sm:p-5 sm:pt-10">
      <div className="flex flex-col gap-10 md:flex-row md:gap-0">
        <div className="w-full md:w-1/2">
          <img src={FooterImg} alt="DevStack Logo" className="mb-3 h-10 w-24" />

          <p className="mb-4 max-w-sm text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex gap-4">
            <a href="" className="text-sm font-bold">
              GitHub
            </a>

            <a href="" className="text-sm font-bold">
              Twitter
            </a>

            <a href="" className="text-sm font-bold">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex w-full justify-between gap-4 md:w-1/2 md:gap-6">
          <div>
            <h4 className="mb-3 text-xs font-bold">PRODUCT</h4>

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
            <h4 className="mb-3 text-xs font-bold">COMPANY</h4>

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
            <h4 className="mb-3 text-xs font-bold">LEGAL</h4>

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
