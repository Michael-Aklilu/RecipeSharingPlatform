import { AiOutlineMenu } from "react-icons/ai";
import { Upload, User, Bell, Search, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import { useSideBarContext } from "../../context/SideBar";


export default function Header({ setFilteredRecipes, recipes }) {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { toggle } = useSideBarContext();

  const handleInput = async (event) => {
    const input = event.target.value.toLowerCase().trim();
    setSearchInput(input);
    if (input === "") {
      setFilteredRecipes(recipes);
      return;
    }

    const filteredRecipes = recipes.filter((r) =>
      r.title.toLowerCase().includes(input)
    );
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2  pb-2 bg-gray-700 ">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button onClick={toggle} className="ml-2 hidden lg:flex">
          <AiOutlineMenu size={21} />
        </Button>
        <a href="/"></a>
        <button className="lg:text-3xl text-white">Tasty Bites</button>
      </div>
      <form
        onInput={handleInput}
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft className="text-white" />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            name="search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full "
          />
          <div>
            <Button
              type="button"
              className="py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0"
            >
              <Search />
            </Button>
          </div>
        </div>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden text-white"
        >
          <Search />
        </Button>

       
      </div>
    </div>
  );
}
