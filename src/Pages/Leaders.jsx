import Navbar from "./../Components/Navbar"; 
import FooterKen from "./../Components/FooterKen";
import BreadcrumbMenu from "../Components/BreadcrumbMenu"; 
import { useMediaQuery } from "@mui/material";
import { FloatButton } from "antd";
import "../Sass/Leader.scss"; // Ensure this contains the SASS styles
import { useState } from "react";

const itemData = [
    { 
      img: "https://i.imgur.com/WqyVdar.jpeg",
      title: "Tomato basil" ,
      Name: "Capt. Paul Zamesa",
      BriefDescription: "Paul is a seasoned professional with over 30 years of experience in the maritime industry.",
      Position: "President",
      FullDesciption: "Capt. Paul has worked in various capacities and has a wealth of experience in the field. He is a certified Master Mariner and has a passion for the industry. He is a visionary leader and has a keen eye for detail. He is a great mentor and has a passion for developing the next generation of maritime professionals. He is a great asset to the team and has been instrumental in the growth of the company.",
    },
    {
      img: "https://i.imgur.com/kRyD2mE.jpeg", 
      title: "Sea star", 
      Name: "Jose C. Padua",
      BriefDescription: "Jose has been in the maritime industry for over 25 years, leading with innovation.",
      Position: "Vice-President",
      FullDesciption: "Capt. Paul has worked in various capacities and has a wealth of experience in the field. He is a certified Master Mariner and has a passion for the industry. He is a visionary leader and has a keen eye for detail. He is a great mentor and has a passion for developing the next generation of maritime professionals. He is a great asset to the team and has been instrumental in the growth of the company.",
    },

    {
      img: "https://www.thenavalconnection.com/futureskillsmaritime/fsm2020/assets/images/speaker/reuben_romero.jpg", 
      title: "Sea star", 
      Name: "Reuben Romero",
      BriefDescription: "Reuben is known for his strategic approach to maritime business and development.",
      Position: "Treasurer",
      FullDesciption: "Capt. Paul has worked in various capacities and has a wealth of experience in the field. He is a certified Master Mariner and has a passion for the industry. He is a visionary leader and has a keen eye for detail. He is a great mentor and has a passion for developing the next generation of maritime professionals. He is a great asset to the team and has been instrumental in the growth of the company.",
    },
    
];


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Leaders = () => {
  // Responsive columns
  const isSmallScreen = useMediaQuery("(max-width: 480px)");
  const isMediumScreen = useMediaQuery("(max-width: 720px)");

  const getCols = () => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3;
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  
  return (
    <>
      <Navbar />
      <br />
      <br />

      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Leadership Team</h1>
      </div>

      <BreadcrumbMenu 
        anchorEl={anchorEl}  
        handleClose={handleClose} 
        handleClick={handleClick} 
      />

      <br />
      <br />

      {/* Image Gallery with Cards */}
      <div className="LeaderGallery">
        <div className="card-container">
          {itemData.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.Name} />
              <div className="info">
                <h1>{item.Name}</h1>
                <div>{item.Position}</div>
                <p>{item.BriefDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />

      {/* Scroll to top button */}
      <FloatButton.BackTop
        visibilityHeight={1}
        onClick={scrollToTop}
        style={{ zIndex: "999999", height: "4rem", width: "4rem" }}
        rootClassName="custom-float-button"
      />

      <FooterKen id="contact" />
    </>
  );
};

export default Leaders;
