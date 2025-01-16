import { FaBan } from "react-icons/fa";

export default function RemoveComment({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form>
            <h1 className=" flex text-3xl justify-center gap-2 text-center font-semibold text-white ">
              <FaBan /> Remove Comment
            </h1>
            <hr className="mt-3" />

            <div className="mt-3">
              <label
                htmlFor="recipe"
                className="text-white block text-base mb-2"
              >
                Comment
              </label>

              <input
                type="text"
                name="comment"
                id="comment"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
                placeholder="Enter comment..."
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
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
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
