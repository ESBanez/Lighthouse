import "../../Sass/maincarousel.css";
import "../../Javascript/animated-headline.js";


function MainCarousel () {
  return (
    <div className="maincarousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="ratio ratio-16x9">
              <iframe
                // width="560"
                // height="315"
                // src="https://www.youtube.com/embed/MGNgbNGOzh8"
                // title="YouTube video player"
                // frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <h2 className="text-white">Lighthouse Innovations Inc.</h2>

            <h1 className="cd-headline rotate-1 mb-4 pb-2">
              <span className="cd-words-wrapper">
                <b className="is-visible">
                  <a href="#visi" className="text-warning">Visibility.</a>
                </b>
                <b> 
                  <a href="#insi" className="text-warning">Insight.</a>
                </b>
                <b>
                  <a href="#valu" className="text-warning">Value.</a>
                </b>
              </span>
            </h1>
{/* 
            <div className="custom-btn-group">
              <a href="#section_2" className="btn custom-btn smoothscroll me-3">
                Our Story
              </a>

              <a href="#section_3" className="link smoothscroll">
                View our services
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;