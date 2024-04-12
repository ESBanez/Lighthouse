
import "../Sass/Rapid.scss";
import { Button, Popover } from 'antd';



function Rapid1() {
    const content = (
        <div>
          <p>Proceed to Rapid website?</p>
        </div>
      );
      
    
    return(
        <div className="rapidsection">
            <div className="rapidcomponent">
                <div className="rapiddefinition">
                    <div className="rapiddefinitioncomponent">
                        <div className="rapidlogocomponent">
                            <div className="rapidlogoholder">
                                <img src="rapid.png" className="rapidlogo"/>
                            </div>
                            <div>
                                R A P I D
                            </div>
                        </div>
                        <br/><br/>
                        <div className="rapidparagraphholder">
                            <div className="rapidparagraph">
                                "Motivation and Success."
                            </div>
                        </div>
                        <Popover
                            content={content}
                            title="Title"
                            trigger="hover"
                            style={{ display: "flex", justifyContent: "center", alignContent: "center" }}
                        >
                            <a href="https://rapidonline.ph/guest/dashboard" style={{ display: "flex", justifyContent: "center", textDecoration: "none" }}>
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
                                    }}
                                    type="primary"
                                >
                                    <span style={{ alignSelf: "center", textDecoration: "none" }}>View</span>
                                </Button>
                            </a>
                        </Popover>


                    </div>
                </div>
                <div className="rapidcardcontainer ">
                <div className="rapidCard">
                    <img src="achieverLogo2.png" alt="Bangtan" className="BangtanImage"/>
                </div>
            </div>
            </div>
        </div>
    );
}





export default Rapid1;