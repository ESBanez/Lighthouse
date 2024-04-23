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
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip

import "../Sass/Services.scss";

const images = [
  {
    url: "content-creation.jpg",
    title: "Content creation",
    hovercomment: "The process of generating material for online platforms, including articles, videos, images, and more, to engage and inform an audience.",
  },
  {
    url: "bookkeeping.jpg",
    title: "Bookkeeping",
    hovercomment: "The systematic recording, organizing, and managing of financial transactions for a business, ensuring accuracy and compliance with regulations.",
  },
  {
    url: "social-media-management.jpg",
    title: "Social Media Posting",
    hovercomment: "The act of publishing content, such as updates, photos, or videos, on social media platforms to communicate with and engage an audience.",
  },
  {
    url: "socialmediaadvertisement.jpg",
    title: "Social Media Advertisement",
    hovercomment: " Paid promotional content displayed on social media platforms to increase brand visibility, drive traffic, and achieve marketing goals.",
  },
  {
    url: "community.jpg",
    title: "Community Engagement",
    hovercomment: " Interaction and involvement with a group of people sharing common interests or characteristics, often facilitated through activities, events, or online discussions.",
  },
  {
    url: "Technical-Ship-Management.jpg",
    title: "Technical Ship Management",
    hovercomment: "Technical Ship Management for social media.",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.5)", // Make sure the values match your design expectations

  [theme.breakpoints.down("sm")]: {
    width: "100%", // Overrides inline-style
    height: 100,
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
  right: 1,
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

export default function Service() {
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
    <>
      <div className="servicesbackground">
        <div
          data-aos="fade-right"
          className="servicesweoffercontainer"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-10rem",
            color: "white",
            fontSize: "2rem",
            padding: "1rem 0",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid var(--blue)",
              flex: "1",
              alignSelf: "center",
            }}
          ></div>
          <div className="servicesweoffer">Services we offer</div>
          <div
            style={{
              borderBottom: "2px solid var(--blue)",
              flex: "1",
              alignSelf: "center",
            }}
          ></div>
        </div>
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
                      fontSize: "1.5rem",
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

        {/* Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Wanted our service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {selectedImage && selectedImage.hovercomment}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} disabled>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}