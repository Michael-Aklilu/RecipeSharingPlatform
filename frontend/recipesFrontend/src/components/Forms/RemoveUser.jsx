export default function RemoveUser({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="fixed top-1/4 left-1/4 translate-x-1/2  p-3  bg-gray-700 rounded">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form>
            <h1 className="text-3xl block text-center font-semibold text-white ">
              <i className="fa-solid fa-user text-white"></i> Remove User
            </h1>
            <hr className="mt-3" />

            <div className="mt-3">
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
                placeholder="Enter Username..."
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
