import { HiOutlineBookOpen } from "react-icons/hi";

export default function AddRecipe({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 p-4 w-screen border flex justify-center items-center ">
      <form className="w-1/2 max-w-5xl">
        <div className="text-white p-6 md:p-8 flex flex-col space-y-2  space-x-4  border border-white bg-gray-700 rounded-xl max-h-[60vh] overflow-y-auto">
          <h1 className="text-3xl flex justify-center font-semibold text-white gap-2 ">
            <HiOutlineBookOpen />
            Add Recipe
          </h1>
          <hr className="border border-white" />
          <label htmlFor="title" className="text-xl ">
            Title:{" "}
            <input
              type="text"
              className="mt-5 rounded text-xl text-black p-2 ml-20"
              placeholder="Enter title ..."
            />
          </label>
          <label htmlFor="description" className="flex gap-5 text-xl">
            Description:{" "}
            <textarea
              name=""
              id=""
              className=" text-black text-xl p-2 w-1/2 rounded"
              placeholder="Enter description ..."
            ></textarea>
          </label>
          <label htmlFor="ingredients" className="flex gap-5 text-xl">
            Ingredients:{" "}
            <textarea
              name=""
              id=""
              className=" text-black text-xl p-2 w-1/2 rounded"
              placeholder="Enter one ingredient per line (e.g., 1 cup sugar, 2 eggs)"
            ></textarea>
          </label>
          <label htmlFor="instructions" className="flex gap-5 text-xl">
            Instructions:{" "}
            <textarea
              name=""
              id=""
              className=" text-black text-xl p-2 w-1/2 rounded"
              placeholder="Enter one instruction per line (e.g., Boil water, Pre-heat oven)"
            ></textarea>
          </label>
          <label htmlFor="servings" className="text-xl">
            Servings:{" "}
            <input
              type="text"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 ml-10"
              placeholder="Enter the number of servings ..."
            />
          </label>
          <label htmlFor="prep-time" className="text-xl ">
            Prep time:{" "}
            <input
              type="text"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 m-8"
              placeholder="Enter the prep time ..."
            />
          </label>
          <label htmlFor="Cook time" className="text-xl ">
            Cook time:
            <input
              type="text"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 m-8"
              placeholder="Enter the cook time ..."
            />
          </label>
          <label htmlFor="Cook time" className="text-xl ">
            Image url:{" "}
            <input
              type="text"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 m-8"
              placeholder="Optional image url ..."
            />
          </label>

          <div className="mt-5 flex justify-evenly">
            <button
              onClick={() => setOpen(false)}
              className="border-2 border-white-600  bg-white text-gray-700  p-2 w-1/4 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="border-2 border-white-600 w-1/4  bg-white text-gray-700 p-2 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
