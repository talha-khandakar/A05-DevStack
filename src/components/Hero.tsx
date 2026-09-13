import HeroImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <div className="mx-auto mt-5 flex max-w-6xl flex-col items-center justify-between px-4 md:flex-row">
      <div className="w-full md:w-1/2">
        <p className="text-4xl font-bold md:text-5xl">Build Your Ideal</p>

        <p className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Development Stack
        </p>

        <p className="mt-6 text-lg text-gray-600">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="w-full rounded bg-linear-to-r from-orange-500 to-pink-500 px-4 py-2 text-white sm:w-auto">
            Explore Technologies
          </button>

          <button className="w-full rounded border px-8 py-2 sm:w-auto">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-8 w-full md:mt-0 md:w-1/2">
        <img
          src={HeroImg}
          alt="Hero Image"
          className="mx-auto w-full max-w-md"
        />
      </div>
    </div>
  );
}
