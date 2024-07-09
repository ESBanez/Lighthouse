import "../../Sass/maincarousel.css";
import "../../Javascript/animated-headline.js";

function MainCarousel({ onScrollToSection }) {
  return (
    <div className="maincarousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 mb-5 mb-lg-0">
            <h2 className="text-white" style={{ fontSize: "xx-large" }}>
              Lighthouse Innovations Inc.
            </h2>

            <div className="cd-headline rotate-1 mb-4 pb-2">
              <span className="cd-words-wrapper">
                <b className="is-visible">
                  <a
                    className="text-warning"
                    onClick={() => onScrollToSection('visibility')}
                    style={{ pointerEvents: 'auto' }}
                  >
                    Visibility
                  </a>
                </b>
                <b>
                  <a
                    className="text-warning"
                    onClick={() => onScrollToSection('insight')}
                    style={{ pointerEvents: 'auto' }}
                  >
                    Insight
                  </a>
                </b>
                <b>
                  <a
                    className="text-warning"
                    onClick={() => onScrollToSection('values')}
                    style={{ pointerEvents: 'auto' }}
                  >
                    Value
                  </a>
                </b>
              </span>
            </div>
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
}

export default MainCarousel;
