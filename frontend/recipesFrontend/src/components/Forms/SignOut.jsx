export default function SignOut({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="fixed top-1/4 left-1/4 translate-x-1/2  p-3  bg-gray-700 rounded">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form>
            <h1 className="text-3xl block text-center font-semibold text-white ">
              <i className="fa-solid fa-user text-white"></i> Sign Out
            </h1>
            <hr className="mt-3" />

            <div className="mt-3 text-white flex justify-center text-lg">
              <p>Are you sure you would like to sign out?</p>
            </div>

            <div className="mt-5 flex justify-evenly">
              <button
                onClick={() => setOpen(false)}
                className="border-2 border-white-600  bg-white text-gray-700 p-2 h-1/2 rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border-2 border-white-600  bg-white text-gray-700 p-2 h-1/2 rounded-md"
              >
                Sign out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
