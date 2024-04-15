import "../Sass/Bts.css";
import { Button, Popover } from "antd";

function Btsolve() {
  const content = (
    <div>
      <p>Proceed to BTSolve website?</p>
    </div>
  );

  return (
    <div className="btssection container-fluid">
      <div className="btscomponent">
        <div className="btscardcontainer">
          <div className="BtsCard">
            <img src="Bangtan.png" alt="Bangtan" className="BangtanImage" />
          </div>
        </div>
        <div className="btscardcontainer">
          <div className="btsdefinitioncomponent">
            <div className="btslogocomponent">
              <div className="btslogoholder">
                <img src="bts.png" className="btslogo" />
              </div>
              <div>BTSolve Inc.</div>
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
              title="Title"
              trigger="hover"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <a
                href="https://sslinux.btsolve.com/btssite/"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", // Changed alignContent to alignItems for button alignment
                    backgroundColor: "var(--blue)",
                    borderColor: "var(--yellow)",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    borderWidth: "3px",
                    alignSelf: "center",
                    color: "var(--yellow)",
                    width: "8rem"
                  }}
                  type="primary"
                >
                  <span style={{ alignSelf: "center", textDecoration: "none" }}>
                    View
                  </span>
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
