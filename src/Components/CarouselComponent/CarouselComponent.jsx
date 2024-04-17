import Carousel from "react-elastic-carousel";
import MainCarousel from "./MainCarousel";
import Visibility from "./Visibility";
import Insight from "./Insight";
import Values from "./Values";
import "../../Sass/maincarousel.css";

const CarouselComponent = () => {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >

      <div className="carouselparent">
        <Carousel>
          <MainCarousel style={{alignContent: "center"}}/>
          <Visibility />
          <Insight />
          <Values />
        </Carousel>
      </div>

    </section>
  );
};

export default CarouselComponent;
