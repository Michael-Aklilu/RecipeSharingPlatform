import { MdAdminPanelSettings } from "react-icons/md";
export default function AddAdmin({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed top-1/4 left-1/4 translate-x-1/2  p-3 border border-stone-300 bg-gray-700 rounded">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form>
            <h1 className="text-3xl flex text-center font-semibold text-white justify-center gap-1 ">
              <MdAdminPanelSettings className="" />
              Add Admin
            </h1>
            <hr className="mt-3" />
            <div className="mt-3">
              <label htmlFor="name" className="block text-base mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Name..."
              />
            </div>
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
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-base mb-2 text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter Password..."
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
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
