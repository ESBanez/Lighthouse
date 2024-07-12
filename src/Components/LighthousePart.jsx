import "../Sass/LighthousePart.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';


import "../Sass/Services.scss";

const images = [
  {
    url: "content-creation.jpg",
    title: "Content creation",
    hovercomment:
      "The process of generating material for online platforms, including articles, videos, images, and more, to engage and inform an audience.",
  },
  {
    url: "bookkeeping.jpg",
    title: "Bookkeeping",
    hovercomment:
      "The systematic recording, organizing, and managing of financial transactions for a business, ensuring accuracy and compliance with regulations.",
  },
  {
    url: "social-media-management.jpg",
    title: "Social Media Posting",
    hovercomment:
      "The act of publishing content, such as updates, photos, or videos, on social media platforms to communicate with and engage an audience.",
  },
  {
    url: "socialmediaadvertisement.jpg",
    title: "Social Media Advertisement",
    hovercomment:
      "Paid promotional content displayed on social media platforms to increase brand visibility, drive traffic, and achieve marketing goals.",
  },
  {
    url: "community.jpg",
    title: "Community Engagement",
    hovercomment:
      "Interaction and involvement with a group of people sharing common interests or characteristics, often facilitated through activities, events, or online discussions.",
  },
  {
    url: "Technical-Ship-Management.jpg",
    title: "Technical Ship Management",
    hovercomment: "Technical Ship Management for social media.",
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

function LighthousePart() {
  AOS.init();
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

  return (
    <div className="lighthousecomponent">
      <section className="lighthousesection">
        <h4 className="lighthousehead">
          <div
            className="TextReavealLogo lighthouselogocomponent"
            data-aos="fade-in-down"
          >
            <img
              src="lhi-logo.png"
              style={{ width: "15rem" }}
              className="lighthouselogo"
            />
          </div>
        </h4>
        <br />
        <div className="lighthousebody">
          <div className="lighthousedefinition">
            <div className="lighthousetextdefine">
              <div data-aos="fade-right">"Delivering value through</div>
              <div data-aos="fade-left">
                technology, support and career growth."
              </div>
            </div>
          </div>
          <div className="lighthousedefinition">
            <div className="lighthouseimagecomponent">
              <a href="#services">
                <img
                  src="pinoyseaman.png"
                  className="lighthouseimage"
                  data-aos="zoom-in-up"
                />
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
              <div className="companyaccordions">Services</div>
              <div
                className="companys"
                style={{
                  fontFamily: "montserrat",
                  color: "white",
                }}
              >
                Lighthouse
              </div>
              <div
                style={{
                  fontFamily: "montserrat",
                  color: "transparent",                }}
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
      </section>

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

export default LighthousePart;
