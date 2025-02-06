import kitfoImg from "../../assets/kitfo.jpg";
import carbonaraImg from "../../assets/Espaguetis_carbonara.jpg";
import pancakeImg from "../../assets/pancakes.webp";
import {useNavigate} from "react-router-dom"
export default function Cards() {
  const navigate = useNavigate()
  return (
    <div className="w-full py-[10rem] px-4">
      <div className="max-w-full mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-2/3 mx-auto mt-[-3rem] rounded-lg  "
            src={kitfoImg}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Ethiopian Kitfo
          </h2>
          <button
            className="bg-gray-700 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-white p-2"
            onClick={() => navigate("/Home")}
          >
            Try recipe
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-2/3 mx-auto mt-[-3rem] rounded-lg h-3/4  "
            src={carbonaraImg}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Spaghetti Carbonara
          </h2>
          <button
            className="bg-gray-700 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-white p-2"
            onClick={() => navigate("/Home")}
          >
            Try recipe
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-2/3 mx-auto mt-[-3rem] rounded-lg "
            src={pancakeImg}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Pancakes</h2>
          <button
            className="bg-gray-700 w-[150px] rounded-md font-medium text-lg my-6 mx-auto px-5 text-white p-2"
            onClick={() => navigate("/Home")}
          >
            Try recipe
          </button>
        </div>
      </div>
    </div>
  );
}
