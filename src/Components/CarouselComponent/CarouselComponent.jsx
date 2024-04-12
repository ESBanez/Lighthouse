import Carousel from 'react-elastic-carousel';
import MainCarousel from "./MainCarousel";
import Visibility from "./Visibility";
import Insight from "./Insight";
import Values from "./Values";
import "../../Sass/maincarousel.css"

  
const CarouselComponent = () => {
   
    return (
      <div className="carouselcontainer" >
        <Carousel enableAutoPlay>
          <MainCarousel/>
          <Visibility/>
          <Insight/>
          <Values/>
        </Carousel>
      </div>
    )
  }

  export default CarouselComponent;