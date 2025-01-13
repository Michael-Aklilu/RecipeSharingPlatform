import Navbar from "./UserPage/Navbar";
import Hero from "./UserPage/Hero";
import Recipes from "./UserPage/Recipes";
import Cards from "./UserPage/Cards";
import Footer from "./UserPage/Footer";
const UserHomePage = () => {
  return (
    <div className="bg-stone-300 w-full">
      <Navbar />
      <Hero />
      <Recipes />
      <Cards />
      <Footer />
    </div>
  );
};

export default UserHomePage;
