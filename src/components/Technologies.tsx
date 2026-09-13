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
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5">
      <p className="text-2xl font-bold text-gray-900">
        Explore the <span className="text-pink-500">Technologies</span>
      </p>

      <p className="mt-1 text-sm text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-6 flex flex-col items-start gap-6 lg:flex-row">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:flex-1">
          {technologiesdata.map((technology) => {
            const isAdded = addedcart.some((item) => item.id === technology.id);

            return (
              <div
                key={technology.id}
                className={`flex h-full min-w-0 flex-col rounded-lg border bg-white p-4 ${
                  isAdded ? "border-pink-500" : "border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8"
                  />

                  <p className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                    {technology.badge}
                  </p>
                </div>

                <p className="mt-3 text-base font-semibold">
                  {technology.name}
                </p>

                <p className="mt-2 line-clamp-3 min-h-12 text-xs text-gray-500">
                  {technology.description}
                </p>

                <div className="mb-3 mt-4 flex items-center gap-2">
                  <p className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
                    {technology.category}
                  </p>

                  <p className="text-xs text-gray-500">
                    {technology.difficulty}
                  </p>

                  <p className="ml-auto text-xs text-yellow-500">
                    ★ {technology.rating}
                  </p>
                </div>

                <button
                  disabled={isAdded}
                  className={`mt-auto w-full cursor-pointer rounded-md pt-3 pb-2 text-xs ${
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

        <div className="w-full lg:sticky lg:top-24 lg:w-72 lg:shrink-0">
          <Addedtech addedcart={addedcart} setAddedcart={setAddedcart} />
        </div>
      </div>
    </div>
  );
}
