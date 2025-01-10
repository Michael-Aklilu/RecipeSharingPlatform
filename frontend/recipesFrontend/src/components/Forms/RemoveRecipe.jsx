import { FaBan } from "react-icons/fa";
export default function RemoveRecipe({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="fixed top-1/4 left-1/4 translate-x-1/2  p-3  bg-gray-700 rounded">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form>
            <h1 className=" flex text-3xl justify-center gap-2 text-center font-semibold text-white ">
              <FaBan /> Remove Recipe
            </h1>
            <hr className="mt-3" />

            <div className="mt-3">
              <label
                htmlFor="recipe"
                className="text-white block text-base mb-2"
              >
                Recipe title
              </label>

              <input
                type="text"
                name="title"
                id="title"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
                placeholder="Enter recipe title..."
              />

              <label
                htmlFor="username"
                className="block text-base mb-2 text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter the username of the recipe owner..."
              />
            </div>

            <div className="mt-5 flex justify-evenly">
              <button
                onClick={() => setOpen(false)}
                className="border-2 border-white-600  bg-white text-gray-700 p-2 h-1/2 rounded-md"
              >
                Close
              </button>
              <button
                type="submit"
                className="border-2 border-white-600  bg-white text-gray-700 p-2 h-1/2 rounded-md"
              >
                Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
