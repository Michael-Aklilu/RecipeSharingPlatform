import { ReactTyped } from "react-typed";
export default function Hero() {
  return (
    <div className="text-stone-800 bg-white">
      <div className="max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
       
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
        Discover Your Next Delicious Adventure One Recipe At A Time!
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Where cooking is 
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["simple!", "fun!", "easy!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-gray-700 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-white p-2">
          Get Started
        </button>
      </div>
    </div>
  );
}
