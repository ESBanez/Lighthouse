import "../Sass/Bts.css";
import { Button, Popover } from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import BtsCarousel from "./BtsCarousel";



function Btsolve() {
  AOS.init();

  const content = (
    <div>
      <p>Proceed to BTSolve website?</p>
    </div>
  );



  return (
    <div className="btssection container-fluid">
      <div className="btscomponent">
        <div className="btscardcontainer" data-aos="fade-right">
          <div className="BtsCard">
            <BtsCarousel/>
          </div>
        </div>
        <div className="btscardcontainer">
          <div className="btsdefinitioncomponent">
            <div data-aos="fade-left" className="btslogocomponent">
              <div className="btslogoholder">
                <img src="btslogo.png" className="btslogo" />
              </div>
              <div >BTSolve Inc.</div>
            </div>
            <br />
            <br />
            <div className="btsparagraphholder">
              <div className="btsparagraph">
                "Stable, secure and scalable cloud solutions."
              </div>
            </div>
            <br /><br />
            <Popover
              content={content}
               trigger="hover"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
              data-aos="fade-right"
            >
              <a
                href="https://sslinux.btsolve.com/btssite/"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Button type="primary"  target="_blank">
                    View more
                </Button>
              </a>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Btsolve;
