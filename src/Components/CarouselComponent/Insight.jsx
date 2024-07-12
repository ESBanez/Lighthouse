import { Button } from "@mui/material";
import "../../Sass/maincarousel.css";
import "../../Sass/Home.css";

const Insight = ({ onScrollToSection }) => {
  return (
    <div>
      <div className="carouseltitleholder">
        <div className="carouseltitle" id="insight">
          <a 
            onClick={() => onScrollToSection("section3")} 
            id="insi" 
            style={{ pointerEvents: 'auto' }}
          >
            Insight
          </a>
        </div>
      </div>
      <br />
      <div className="carouselbody">
        <ul>
          <li>Does the Filipino Seafarer Multidimensional Assessment accurately reflect the unique challenges faced by Filipino seafarers?</li>
          <li>How can the Achievers Mindset tool help me develop the qualities I need to succeed in the maritime industry?</li>
        </ul>
        <br />
        <Button 
          variant="contained" 
          className="carouselbutton"
          onClick={() => onScrollToSection("section3")}
        >
          View more
        </Button>
      </div>
    </div>
  );
};

export default Insight;
