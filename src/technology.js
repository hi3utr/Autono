import TechCar from "./techCar";
import Techheader from "./techHeader";
import Products from "./products";
import Footer from "./footer";
import AnimatedPage from "./AnimatedPage";
function Technology() {
  return (
    <AnimatedPage>
      <Techheader />
      <TechCar />
      <Products />
      <Footer />
    </AnimatedPage>
  );
}

export default Technology;
