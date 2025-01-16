import { useNavigate } from "react-router-dom";

export default function SignOut({ open, setOpen }) {
  const navigate = useNavigate();
  if (!open) return null;

  const handleSignout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    navigate("/Login");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form onSubmit={handleSignout}>
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
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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
