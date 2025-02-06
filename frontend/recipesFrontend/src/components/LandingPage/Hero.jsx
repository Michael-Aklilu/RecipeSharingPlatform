import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate()
  return (
    <div className="text-stone-800 bg-white">
      <div className="max-w-[800px] mt-[96px] w-full h-[75vh] mx-auto text-center flex flex-col justify-center ">
        <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">
          Discover Your Next Delicious Adventure One Recipe At A Time!
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
            Where cooking is
          </p>
          <ReactTyped
            className="md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-lime-400"
            strings={["simple!", "fun!", "easy!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-gray-700 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-white p-2" onClick={() => navigate("/Home") }>
          Get Started
        </button>
      </div>
    </div>
  );
}
