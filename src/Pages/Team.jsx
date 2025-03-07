import Navbar from "./../Components/Navbar"; 
import FooterKen from "./../Components/FooterKen";
import BreadcrumbMenu from "../Components/BreadcrumbMenu"; // Import BreadcrumbMenu
import { ImageList, ImageListItem } from "@mui/material"; 
import { useMediaQuery } from "@mui/material";
import { FloatButton } from "antd";
import "../Sass/Team.css";
import { useState } from "react";


const lighthouseCompany = [
  { img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
  { img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
  { img: "https://i.imgur.com/J9KWYW9.png", title: "Ederick"},
  { img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" },
  { img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8", title: "Hats" },
  { img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", title: "Honey" },
  { img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", title: "Basketball" },
  { img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f", title: "Fern" },
  { img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25", title: "Mushrooms" },
  { img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af", title: "Tomato basil" },
  { img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1", title: "Sea star" },
  { img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6", title: "Bike" },
];

const btsCompany = [
  { img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
  { img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
  { img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" },
  { img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8", title: "Hats" },
  { img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", title: "Honey" },
  { img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", title: "Basketball" },
  { img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f", title: "Fern" },
  { img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25", title: "Mushrooms" },
  { img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af", title: "Tomato basil" },
  { img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1", title: "Sea star" },
  { img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6", title: "Bike" },
];

const rapidCompany = [
  { img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
  { img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
  { img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" },
  { img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8", title: "Hats" },
  { img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62", title: "Honey" },
  { img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", title: "Basketball" },
  { img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f", title: "Fern" },
  { img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25", title: "Mushrooms" },
  { img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af", title: "Tomato basil" },
  { img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1", title: "Sea star" },
  { img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6", title: "Bike" },
];


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Team = () => {
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
        <h1>Meet Our Team</h1>
      </div>

      {/* BreadcrumbMenu replaces previous menu and breadcrumbs */}
      <BreadcrumbMenu 
        anchorEl={anchorEl}  
        handleClose={handleClose} 
        handleClick={handleClick} 
      />

      {/* Lighthouse Section */}
      <div className="TeamBannertop" id="lighthouseBannertop">
        <div>Lighthouse</div>
      </div>
      <div className="BannerGallery">
        <div className="TeamBannerRotated" id="lighthouseBannerRotated">
          Lighthouse
        </div>
        <div>
          <ImageList sx={{ width: "100%", height: "auto" }} cols={getCols()} rowHeight={164}>
            {lighthouseCompany.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",      // Ensures full width inside the grid
                    height: "164px",    // Fixed height for uniformity
                    objectFit: "cover", // Ensures images are cropped rather than stretched
                    borderRadius: "8px" // Optional: adds rounded corners
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* RAPID Section */}
      <div className="TeamBannertop" id="RapidBannerTop">
        <div>RAPID</div>
      </div>
      <div className="RapidBannerGallery">
        <div>
          <ImageList sx={{ width: "100%", height: "auto" }} cols={getCols()} rowHeight={164}>
            {rapidCompany.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",      // Ensures full width inside the grid
                    height: "164px",    // Fixed height for uniformity
                    objectFit: "cover", // Ensures images are cropped rather than stretched
                    borderRadius: "8px" // Optional: adds rounded corners
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="TeamBannerRotated" id="RapidBannerRotated">
          RAPID
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* BTSolve Section */}
      <div className="TeamBannertop" id="btsBannertop">
        <div>BTSolve</div>
      </div>
      <div className="BannerGallery">
        <div className="TeamBannerRotated" id="btsolveBannerRotated">
          BTSolve
        </div>
        <div>
          <ImageList sx={{ width: "100%", height: "auto" }} cols={getCols()} rowHeight={164}>
            {btsCompany.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",      // Ensures full width inside the grid
                    height: "164px",    // Fixed height for uniformity
                    objectFit: "cover", // Ensures images are cropped rather than stretched
                    borderRadius: "8px" // Optional: adds rounded corners
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>

      <br />
      <br />
      <br />
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

export default Team;
