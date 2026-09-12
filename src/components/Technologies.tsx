import { use, useState } from "react";
import { toast } from "react-toastify";
import type { technologiesType } from "../Type";
import Addedtech from "./Addedtech";

interface iTechnologiesProps {
  technologyPromises: Promise<technologiesType[]>;
}

export default function Technologies({
  technologyPromises,
}: iTechnologiesProps) {
  const technologiesdata = use(technologyPromises);

  const [addedcart, setAddedcart] = useState<technologiesType[]>([]);

  const handleAdded = (technology: technologiesType): void => {
    const newTech = [...addedcart, technology];
    setAddedcart(newTech);
    toast.success("add to stack");
  };

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <p className="text-2xl font-bold text-gray-900">
        Explore the <span className="text-pink-500">Technologies</span>
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 mt-6 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 items-stretch">
          {technologiesdata.map((technology) => {
            const isAdded = addedcart.some((item) => item.id === technology.id);

            return (
              <div
                key={technology.id}
                className={`flex flex-col h-full border rounded-lg p-4 bg-white ${
                  isAdded ? "border-pink-500" : "border-gray-200"
                }`}
              >
                <div className="flex justify-between items-center">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-8 h-8"
                  />

                  <p className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {technology.badge}
                  </p>
                </div>

                <p className="text-base font-semibold mt-3">
                  {technology.name}
                </p>

                <p className="text-xs text-gray-500 mt-2 line-clamp-3 min-h-12">
                  {technology.description}
                </p>

                <div className="flex items-center gap-2 mt-4 mb-3">
                  <p className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                    {technology.category}
                  </p>

                  <p className="text-xs text-gray-500">
                    {technology.difficulty}
                  </p>

                  <p className="text-xs text-yellow-500 ml-auto">
                    ★ {technology.rating}
                  </p>
                </div>

                <button
                  disabled={isAdded}
                  className={`w-full text-xs pt-3 pb-2 rounded-md mt-auto cursor-pointer ${
                    isAdded ? "bg-white text-pink-500" : "bg-black text-white"
                  }`}
                  onClick={() => handleAdded(technology)}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full lg:w-72 lg:sticky lg:top-24">
          <Addedtech addedcart={addedcart} setAddedcart={setAddedcart} />
        </div>
      </div>
    </div>
  );
}
