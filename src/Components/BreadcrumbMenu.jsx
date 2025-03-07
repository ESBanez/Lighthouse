import React, { useEffect } from "react";
import { Menu, MenuItem, Breadcrumbs, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const BreadcrumbMenu = ({ anchorEl, handleClose, handleClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Ensure scrolling happens after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  const handleNavClick = (sectionId) => {
    handleClose(); // ✅ Close the menu when clicking an option
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/team", { state: { scrollTo: sectionId } }); // ✅ Navigate if section not found
      }
    }, 100);
  };

  return (
    <React.Fragment>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        aria-labelledby="with-menu-demo-breadcrumbs"
      >
        <MenuItem onClick={() => handleNavClick("lighthouseBannertop")}>
          Lighthouse
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("RapidBannerTop")}>
          Rapid
        </MenuItem>
        <MenuItem onClick={() => handleNavClick("btsBannertop")}>
          BTSolve
        </MenuItem>
      </Menu>

      <Breadcrumbs aria-label="breadcrumbs">
        <IconButton 
          color="primary" 
          size="small" 
          aria-label="Leaders" 
          onClick={() => { handleClose(); navigate("/leaders"); }} // ✅ Close menu and navigate
        >
          Leaders
        </IconButton>

        <IconButton 
          color="primary" 
          size="small" 
          aria-label="Teams" 
          onClick={handleClick}
        >
          Teams
        </IconButton>
        
        <IconButton 
          color="primary" 
          size="small" 
          aria-label="Interns" 
          onClick={() => { handleClose(); navigate("/interns"); }} // ✅ Close menu and navigate
        >
          Interns
        </IconButton>
      </Breadcrumbs>
    </React.Fragment>
  );
};

export default BreadcrumbMenu;
