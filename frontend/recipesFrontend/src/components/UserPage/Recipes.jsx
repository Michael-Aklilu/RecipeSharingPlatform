import chefImg from "../../assets/mainChef.jpg";

export default function Recipes() {
  return (
    <div className="w-full py-16 px-4 bg-gray-700">
      <div className="max-w-full mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={chefImg} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-white font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, vero?
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            cupiditate?
          </p>
          <button className="bg-stone-300 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-black p-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
