import { Button } from "@mui/material";
import "../../Sass/maincarousel.css";

const Values = ({ onScrollToSection }) => {
    return (
        <>  
            <div>
                <div className="carouseltitleholder">
                    <div className="carouseltitle">
                        <a 
                        onClick={() => onScrollToSection("section2")}
                        id="valu">
                            Value
                        </a> 
                    </div>
                </div>
                <br />
                <div className="carouselbody">
                    <ul>
                        <li>How can I improve my chances of becoming a successful seafarer?</li>
                        <li>What skills and qualities do I need to be a strong leader at sea?</li>
                        <li>Do you offer any training or coaching programs alongside these assessments?</li>
                    </ul>
                    <br />
                    <Button
                        variant="contained"
                        className="carouselbutton"
                        onClick={() => onScrollToSection("section2")}
                    >
                        View more
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Values;
