import chefImg from "../../assets/mainChef.jpg";
import { useNavigate } from "react-router-dom";

export default function Recipes() {
  const navigate = useNavigate();
  
  return (
    <div className="w-full py-16 px-4 bg-gray-700">
      <div className="max-w-full mx-auto grid md:grid-cols-2">
        <img
          className="lg:w-[500px] w-[300px] mx-auto my-4"
          src={chefImg}
          alt="/"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2 text-white ">
            New to cooking? Start your culinary journey with Tasty Bites. Easily
            find and follow recipes without the hassle of complex instructions.
            Get cooking today!
          </h1>

          <button
            className="bg-stone-300 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-black p-2"
            
            onClick={() => navigate("/Login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
