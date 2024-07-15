import "../Sass/Bts.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import "../Sass/Services.scss";

function Btsolve2() {
  AOS.init();

  const content = (
    <div>
      <p>Proceed to BTSolve website?</p>
    </div>
  );

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setOpen(true);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const images = [
    {
      url: "btscms.webp",
      title: "Crew Management Solutions",
      hovercomment:
      "Specifically designed for use of Manning Agencies that can manage their crew (crew information, documents, trainings, certificates and licenses, career management).",
    },
    {
      url: "btscva.webp",
      title: "CloudView Accounting",
      hovercomment:
      "An accounting system that can be tailor-fitted for crew and vessel accounting for manning and ship management companies with in depth financial visibility and reports.",
    },
    {
      url: "btscps.webp",
      title: "Crew Payroll System",
      hovercomment:
      "Designed to work with our Crew Management System to facilitate the crew payroll and allotment.",
    },
    {
      url: "btsisms.webp",
      title: "Integrated Ship Management Solutions",
      hovercomment:
      "Specifically design to work with ship management companies with both shore and and vessel management available to sync online and offline depending on the internet on-board the vessel",
    },
    {
      url: "btstala.webp",
      title: "TALA Learning Management Solutions",
      hovercomment:
      "TALA Maritime is an app designed for seafarers to improve their technical knowledge through videos, flashcards, quizzes and more.",
    },

  ];
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: "200px",
    boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.7)",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    //   height: "150px",
    // },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "10rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      height: "calc(15vw)",
    },
  
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    [theme.breakpoints.up("xxl")]: {
      fontSize: "300px", // Increase font size for xl
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px", // Increase font size for xl
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px", // Increase font size for lg
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px", // Adjust font size for md and down
    },
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  return (
    <div style={{textAlign: '-webkit-center'}} id="section5">
      <div className="btscomponent">
        <div className="btslady btscomponents">
          <img src="/bts.webp" />
        </div>

        <div className="btscard btscomponents">
          <div className="to-be-place-left">
            <div data-aos="fade-left" className="btslogocomponent">
              <img src="btslogo.png" className="btslogo" />
              <div className="btslogoword">BTSolve</div>
            </div>

            <br />

              <div className="btsparag">"Stable, secure and scalable cloud solutions."</div>

            <br />

            <a
              href="https://sslinux.btsolve.com/btssite/"
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Button variant="contained">View more</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="companyservices">
        <Accordion>
          <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAnglesDown} bounce style={{color: 'white', height: '1.3rem'}}/>}
            aria-controls="panel1-content"
            id="panel1-header"
            className="accordionsummary"
            style={{
              color: "#FEC804",
              justifyContent: "space-between",
            }}
          >
            <div>Services</div>
            <div
              className="companys"
              style={{
                fontFamily: "montserrat",
                color: "white",
                fontSize: "large",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Btsolve Inc.
            </div>
            <div
              style={{
                fontFamily: "montserrat",
                color: "transparent",
                fontSize: "large",
              }}
            >
              Services
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Box className="servicecard">
              {images.map((image) => (
                <ImageButton
                  key={image.title}
                  className="servicebut"
                  onClick={() => handleClickOpen(image)}
                >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Tooltip title={image.hovercomment}>
                      <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                          position: "relative",
                          p: 4,
                          fontSize: "inherit", // Use inherited font size
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                      >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                      </Typography>
                    </Tooltip>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ zIndex: "99999" }}
      >
        <DialogTitle id="alert-dialog-title" style={{ alignSelf: "center" }}>
          {selectedImage && selectedImage.title} {/* Corrected syntax */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedImage && (
              <div className="modalflexin">
                <div>
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  {selectedImage.hovercomment}
                </div>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Btsolve2;
