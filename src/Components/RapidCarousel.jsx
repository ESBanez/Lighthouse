import "../Sass/rapidcarousel.scss";

function RapidCarousel() {
  return (
    <>
      <section id="home" className="slider" data-stellar-background-ratio="0.5">
        <div className="rapidcarousel-wrapper">
          <div className="rapidcarousel-container">
            <div className="rapidcarousel">
              <a href="https://rapidonline.ph/guest/demo/seamula-demo/dashboard"><div className="rapidimage-one"></div></a>
              <a href="https://rapidonline.ph/guest/dashboard"><div className="rapidimage-two"></div></a>
              <a href="https://rapidonline.ph/guest/demo/socat-demo/dashboard"><div className="rapidimage-three"></div></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RapidCarousel;
