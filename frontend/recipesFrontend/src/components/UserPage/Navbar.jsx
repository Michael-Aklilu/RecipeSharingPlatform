import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" justify-evenly flex items-center h-24 max-w-full mx-auto px-4 text-white bg-gray-700 text-lg">
      <h1 className="w-full text-3xl font-bold text-stone-200 ">TASTY BITES</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Recipes</li>
        <li className="p-4">Login</li>
        <li className="p-4">Register</li>
        <li className="p-4">Admin</li>
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
        <ul className="uppercase bg-gray-700 p-4">
          <li className="p-4 border-b border-stone-300">Home</li>
          <li className="p-4 border-b border-stone-300">Login</li>
          <li className="p-4 border-b border-stone-300">Register</li>
          <li className="p-4 ">Admin</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
