// import "../Javascript/btscarousel.js";
import "../Sass/btscarousel.scss";

function BtsCarousel() {
  return (
    <>
      <section id="home" className="slider" data-stellar-background-ratio="0.5">
        <div className="btscarousel-wrapper">
          <div className="btscarousel-container">
            <div className="btscarousel">
              <div className="btsimage-one"></div>
              <div className="btsimage-two"></div>
              <div className="btsimage-three"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BtsCarousel;
