import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" justify-around flex items-center h-24 max-w-full mx-auto px-4 text-white bg-gray-700 text-lg">
      <h1 className="w-1/3 text-3xl font-bold text-stone-200 ">TASTY BITES</h1>
      <ul className="hidden md:flex text-xl ">
        <li className="p-4">
          <button
            onClick={() => navigate("/Home")}
            className="hover:bg-stone-300 bg-transparent shadow-none rounded-lg p-2"
          >
            Home
          </button>
        </li>
        <li className="p-4">
          <button
            onClick={() => navigate("/login")}
            className="hover:bg-stone-300 bg-transparent shadow-none rounded-lg p-2"
          >
            Login
          </button>
        </li>
        <li className="p-4">
          <button
            onClick={() => navigate("/signUp")}
            className="hover:bg-stone-300 bg-transparent shadow-none rounded-lg p-2"
          >
            Register
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-700 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-stone-300 m-4">
          TASTY BITES
        </h1>
        <ul className=" bg-gray-700 p-4">
          <li className="p-4 border-b border-stone-300">
            <button
              onClick={() => navigate("/")}
              className="hover:bg-stone-300 bg-transparent shadow-none rounded-lg p-2"
            >
              Home
            </button>
          </li>
          <li className="p-4 border-b border-stone-300">
            <button
              onClick={() => navigate("/login")}
              className="hover:bg-stone-300 bg-transparent shadow-none rounded-lg p-2"
            >
              Login
            </button>
          </li>
          <li className="p-4 border-b border-stone-300">
            <button
              onClick={() => navigate("/signUp")}
              className="hover:bg-stone-300 bg-transparent shadow-none rounded-lg p-2"
            >
              Register
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
