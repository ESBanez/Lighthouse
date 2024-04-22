// import Carousel from "react-elastic-carousel";
// import MainCarousel from "./MainCarousel";
// import Visibility from "./Visibility";
// import Insight from "./Insight";
// import Values from "./Values";
import "../../Sass/maincarousel.css";
import { Button } from "@mui/material";
import MainCarousel from "./MainCarousel";

const CarouselComponent = () => {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="carouselparent">
        {/* <Carousel>
          <MainCarousel style={{alignContent: "center"}}/>
          <Visibility />
          <Insight />
          <Values />
        </Carousel> */}

        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <a href="#">
                          <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <div className="allcarousel">
               <MainCarousel/>
              </div>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
            </a>
          </li>
          <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <div className="allcarousel">
                <div className="carouseltitleholder">
                  <div className="carouseltitle">
                    <a href="#section5" id="visi">
                      Visibility
                    </a>
                  </div>
                </div>
                <div className="carouselbody">
                  <br />
                  <ul>
                    <li>
                      What is the best application for crew management and
                      training?
                    </li>
                    <li>
                      How can I optimize the performance and efficiency of my
                      fleet?
                    </li>
                    <li>
                      Do you offer budgeting and forecasting services for
                      maritime businesses?
                    </li>
                  </ul>
                  <br />
                  <Button variant="contained" href="#section5">
                    View more
                  </Button>
                </div>
              </div>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <div className="allcarousel">
                <div className="carouseltitleholder">
                  <div className="carouseltitle">
                    <a href="#section3" id="insi">
                      Insight
                    </a>
                  </div>
                </div>
                <div className="carouselbody">
                  <br />
                  <ul>
                    <li>
                      Does the Filipino Seafarer Multidimensional Assessment
                      accurately reflect the unique challenges faced by Filipino
                      seafarers?
                    </li>
                    <li>
                      How can the Achievers Mindset tool help me develop the
                      qualities I need to succeed in the maritime industry? or
                      maritime businesses?
                    </li>
                  </ul>
                  <br />
                  <Button variant="contained" href="#section3">
                    Click here
                  </Button>
                </div>
              </div>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <div className="allcarousel">
                <div className="carouseltitleholder">
                  <div className="carouseltitle">
                    <a href="#section2" id="valu">
                      Value
                    </a>
                  </div>
                </div>
                <div className="carouselbody">
                  <br />
                  <ul>
                    <li>
                      How can I improve my chances of becoming a successful
                      seafarer?
                    </li>
                    <li>
                      What skills and qualities do I need to be a strong leader
                      at sea?
                    </li>
                    <li>
                      Do you offer any training or coaching programs alongside
                      these assessments?
                    </li>
                  </ul>
                  <br />
                  <Button
                    variant="contained"
                    href="#section2"
                    className="carouselbutton"
                  >
                    Click here
                  </Button>
                </div>
              </div>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </div>
    </section>
  );
};

export default CarouselComponent;
