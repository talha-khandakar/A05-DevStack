import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
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
    toast.success("remove");
  };

  const handleAllDelete = (): void => {
    setAddedcart([]);
    toast.success("remove all");
  };

  return (
    <div className="h-fit w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="font-semibold text-gray-900">Your Stack</p>

      <p className="mt-1 text-xs text-gray-500">
        {addedcart.length} Technology Selected
      </p>

      {addedcart.length === 0 ? (
        <div className="mt-4 flex items-center justify-center rounded-md border border-dashed border-gray-200 py-10">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-2">
            {addedcart.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="flex items-center justify-between rounded-md bg-gray-50 p-2"
                >
                  <div className="flex min-w-0 items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
                      <img
                        src={cart.icon}
                        alt={cart.name}
                        className="h-4 w-4"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm text-gray-800">
                        {cart.name}
                      </p>

                      <p className="text-[10px] text-gray-400">
                        {cart.category}
                      </p>
                    </div>
                  </div>

                  <p
                    className="ml-2 shrink-0 cursor-pointer text-sm text-gray-400"
                    onClick={() => handledelete(cart.id)}
                  >
                    ✕
                  </p>
                </div>
              );
            })}
          </div>

          <button
            className="mt-4 w-full cursor-pointer rounded-md border border-red-200 py-2 text-xs font-medium text-red-500"
            onClick={handleAllDelete}
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}
