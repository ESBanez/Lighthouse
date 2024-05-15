import { Button } from "@mui/material";
import "../../Sass/maincarousel.css"

  
const Insight = ({onScrollToSection}) => {
  

    return (
        <>
            <div>
                <div className="carouseltitleholder">
                    <div className="carouseltitle">
                        <a onClick={() => onScrollToSection("section3")} id="insi">
                            Insight
                        </a> 
                    </div>
                </div>
                <br />
                <div className="carouselbody">
                    <ul>
                        <li>Does the Filipino Seafarer Multidimensional Assessment accurately reflect the unique challenges faced by Filipino seafarers?</li>
                        <li>How can the Achievers Mindset tool help me develop the qualities I need to succeed in the maritime industry? or maritime businesses?</li>
                    </ul>
                    <br />
                    <Button 
                        variant="contained" 
                        className="carouselbutton"
                        onClick={() => onScrollToSection("section3")}
                        >
                        Click here
                    </Button>
                </div>
            </div>
        </>
    )
  }

  export default Insight;