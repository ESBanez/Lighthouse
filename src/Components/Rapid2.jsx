import "../Sass/Rapid.css";
import { Popover } from "antd";
import RapidCarousel from "./RapidCarousel";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import "../Sass/Home.css";


function Rapid2() {
  const content = (
    <div>
      <p data-aos="fade-right">Proceed to Rapid website?</p>
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
      url: "examachievers.webp",
      title: "Achiever's Mindset Test",
      hovercomment:
        "A tool that identifies eight qualities that drive a person towards success in the field of seafaring.",
    },
    {
      url: "examcapt.webp",
      title: "CAPT Test",
      hovercomment:
        "Constructive Anxiety Personality Tool - a personality tool to measure the level of constructive anxiety and safety awareness in the maritime and general context",
    },
    {
      url: "exammensura.webp",
      title: "Mensura - Personality Exam",
      hovercomment:
        "The act of publishing content, such as updates, photos, or videos, on social media platforms to communicate with and engage an audience.",
    },
    {
      url: "exampc.webp",
      title: "PC - ADT Exam",
      hovercomment:
      "Point-and-Call: Awareness Development Tool - an assessment game to measure the focus and awareness levels of participants to combat complacency.",
    },
    {
      url: "examseamula.webp",
      title: "Seamula Exam",
      hovercomment:
      "Filipino Seafarer Multidimensional Assessment - a personality tool developed specifically for Filipino Seafarers for Leadership.",
    },
    {
      url: "examsocat.webp",
      title: "Socat Exam",
      hovercomment: 
      "Socio-Cultural Adaptability Tool - a tool to measure your adaptability skill level on 3 important aspects in the Maritime Industry.",
    },
    {
      url: "l2l.webp",
      title: "Learning to Learn",
      hovercomment: 
      "This new assessment tool is a collection of personality inventories that measure traits that contribute to an individual's interest, willingness, and disposition to learning.",
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
      height: "7rem",
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
      fontSize: "30px", // Increase font size for xl
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
    opacity: 0.4,
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
    <div >   
      <div className="rapidcomponentgeneral" id="section3" style={{display:"flex", justifyContent: "center"}}>
        <div className="rapidcomponent" style={{alignContent:"center", display: "flow"}}>
          <div className="rapidlogocomponent" data-aos="fade-right">
            <div className="rapidlogoholder">
              <img src="Rapid-logo.png" className="rapidlogo" />
            </div>
            <div>R A P I D</div>
          </div>
          <br />
          <div className="rapidparagraphholder" data-aos="fade-left">
            <div className="rapidparagraph">"Motivation and Success."</div>
          </div>
          <br />

          <Popover
            content={content}
            title="Rapid"
            trigger="hover"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <a
              href="https://rapidonline.ph/guest/dashboard"
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
            <Button variant="contained">View more</Button>

            </a>
          </Popover>
        </div>
        <div className="rapiduniquespacer"></div>
        <div className="rapiduniquespacer"></div>

        <div>
          <div className="rapidCard">
            <RapidCarousel />
          </div>
        </div>
      </div>


      <div className="rapiduniquespacer"></div>
      <div className="rapiduniquespacer"></div> 
      
    <div className="companyservices">
          <Accordion>
            <AccordionSummary
            expandIcon={<FontAwesomeIcon icon={faAnglesDown} bounce style={{color: 'white', height: '1.3rem'}}/>}
            aria-controls="panel1-content"
              id="panel1-header"
              className="accordionsummary"
              style={{
                color: 'transparent',
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
                Rapid
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
                    <ImageSrc
                      style={{ backgroundImage: `url(${image.url})` }}
                    />
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
                            fontSize: "12px",
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

export default Rapid2;
