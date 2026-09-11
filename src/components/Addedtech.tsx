import type { Dispatch, SetStateAction } from "react";
import type { technologiesType } from "../Type";

interface iAddedtechProps {
  addedcart: technologiesType[];
  setAddedcart: Dispatch<SetStateAction<technologiesType[]>>;
}

export default function Addedtech({
  addedcart,
  setAddedcart,
}: iAddedtechProps) {
  const handledelete = (technologyId: string): void => {
    const deleleItem = addedcart.filter(
      (delItem) => delItem.id !== technologyId,
    );
    setAddedcart(deleleItem);
  };

  const handleAllDelete = (): void => {
    setAddedcart([]);
  };

  return (
    <div className="border-2 border-blue-500 rounded-lg p-4 bg-white h-fit">
      <p className="font-semibold text-gray-900">Your Stack</p>
      <p className="text-xs text-gray-500 mt-1">
        {addedcart.length} Technology Selected
      </p>

      {addedcart.length === 0 ? (
        <div className="mt-4 border border-dashed border-gray-200 rounded-md py-10 flex items-center justify-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 mt-4">
            {addedcart.map((cart) => {
              return (
                <div className="flex items-center justify-between bg-gray-50 rounded-md p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-md">
                      <img
                        src={cart.icon}
                        alt={cart.name}
                        className="w-4 h-4"
                      />
                    </div>

                    <div>
                      <p className="text-sm text-gray-800">{cart.name}</p>
                      <p className="text-[10px] text-gray-400">
                        {cart.category}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-gray-400 text-sm cursor-pointer"
                    onClick={() => handledelete(cart.id)}
                  >
                    ✕
                  </p>
                </div>
              );
            })}
          </div>

          <button
            className="w-full text-red-500 text-xs font-medium mt-4 border border-red-200 rounded-md py-2 cursor-pointer"
            onClick={handleAllDelete}
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}
