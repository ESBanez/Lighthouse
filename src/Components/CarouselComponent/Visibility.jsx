import { Button } from "@mui/material";
import "../../Sass/maincarousel.css"
  
const Visibility = ({onScrollToSection}) => {
  

    return (
        <>
            <div>
                <div className="carouseltitleholder" >
                    <div className="carouseltitle" >
                        <a 
                        onClick={() => onScrollToSection("section5")}
                        id="visi">
                            Visibility
                        </a> 
                    </div>
                </div>
                <br />
                <div className="carouselbody">
                    <ul>
                        <li>What is the best application for crew management and training?</li>
                        <li>How can I optimize the performance and efficiency of my fleet?</li>
                        <li>Do you offer budgeting and forecasting services for maritime businesses?</li>
                    </ul>
                    <br />
                    <Button 
                        variant="contained" 
                        className="carouselbutton"
                        onClick={() => onScrollToSection("section5")}
                        >
                        View more
                    </Button>
                </div>
            </div>
        </>
    )
  }

  export default Visibility;