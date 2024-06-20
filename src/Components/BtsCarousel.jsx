import { Carousel } from 'antd';
import '../Sass/btscarousel.scss';



const BtsCarousel = () => (
  <>
    <section id="home" className="slider" data-stellar-background-ratio="0.5">
      <div className="btscarousel-wrapper">
        <div className="btscarousel-container">
          <Carousel arrows dotPosition="left" infinite={true} autoplay>
            <div>
              <a href="https://sslinux.btsolve.com/btssite/" target="_blank" rel="noopener noreferrer">
                <div className="btsimage-one"></div>
              </a>
            </div>
            <div>
              <a href="https://sslinux.btsolve.com/btssite/" target="_blank" rel="noopener noreferrer">
                <div className="btsimage-two"></div>
              </a>
            </div>
            <div>
              <a href="https://sslinux.btsolve.com/btssite/" target="_blank" rel="noopener noreferrer">
                <div className="btsimage-three"></div>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  </>
);

export default BtsCarousel;
