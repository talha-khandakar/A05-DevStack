import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import type { technologiesType } from "./Type";

const technologyFetching = async (): Promise<technologiesType[]> => {
  const res = await fetch("../public/Data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologyPromises] = useState(() => technologyFetching());
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h2>Techologies Loading...</h2>}>
        <Technologies technologyPromises={technologyPromises} />
      </Suspense>
    </>
  );
}

export default App;
