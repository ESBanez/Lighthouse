// import "../Javascript/btscarousel.js";
import "../Sass/btscarousel.scss";

function BtsCarousel() {
  return (
    <>
      <section id="home" className="slider" data-stellar-background-ratio="0.5">
        <div className="btscarousel-wrapper">
          <div className="btscarousel-container">
            <div className="btscarousel">
              <a href="https://sslinux.btsolve.com/btssite/"><div className="btsimage-one"></div></a>
              <a href="https://sslinux.btsolve.com/btssite/"><div className="btsimage-two"></div></a>
              <a href="https://sslinux.btsolve.com/btssite/"><div className="btsimage-three"></div></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BtsCarousel;
