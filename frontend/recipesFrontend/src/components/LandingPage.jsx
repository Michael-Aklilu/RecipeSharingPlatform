import Navbar from "./LandingPage/Navbar";
import Hero from "./LandingPage/Hero";
import Recipes from "./LandingPage/Recipes";
import Cards from "./LandingPage/Cards";
import Footer from "./LandingPage/Footer";
const LandingPage = () => {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <Hero />
      <Recipes />
      <Cards />
      <Footer />
    </div>
  );
};

export default LandingPage;
