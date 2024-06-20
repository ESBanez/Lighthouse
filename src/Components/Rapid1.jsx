import "../Sass/Rapid.css";
import { Button, Popover } from "antd";
import RapidCarousel from "./RapidCarousel";

function Rapid1() {
  const content = (
    <div>
      <p data-aos="fade-right">Proceed to Rapid website?</p>
    </div>
  );

  return (
    <div className="rapidsection container-xxl">
      <div className="rapidcomponent">
        <div className="rapiddefinition">
          <div className="rapiddefinitioncomponent">
            <div className="rapidlogocomponent" data-aos="fade-right">
              <div className="rapidlogoholder">
                <img src="Rapid-logo.png" className="rapidlogo" />
              </div>
              <div>R A P I D</div>
            </div>
            <br />
            <br />
            <div className="rapidparagraphholder" data-aos="fade-left">
              <div className="rapidparagraph">"Motivation and Success."</div>
            </div>
            <br /><br />
            <Popover
              content={content}
              title="Rapid"
              trigger="hover"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <a
                href="https://rapidonline.ph/guest/dashboard"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Button
                  type="primary"
                >
                  <span style={{ alignSelf: "center", textDecoration: "none" }}>
                    View more
                  </span>
                </Button>
              </a>
            </Popover>
          </div>
        </div>
        <div className="rapidcardcontainer ">
          <div className="rapidCard">
              <RapidCarousel/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rapid1;
