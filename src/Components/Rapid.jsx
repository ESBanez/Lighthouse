// import { styled } from '@mui/material/styles';
// import ButtonBase from '@mui/material/ButtonBase';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import "../Sass/Rapid.scss";
import 'aos/dist/aos.css'; 


// const images = [
//   {
//     url: '/public/seawoman1.png',
//     title: 'View more',
//     width: '50%',
//     height: '60%',
//     site: 'https://rapidonline.ph/guest/dashboard',
//   },
// ];

// const ImageButton = styled(ButtonBase)(({ theme }) => ({
//   position: 'relative',
//   height: 800,
//   [theme.breakpoints.down('sm')]: {
//     height: 1000,
//   },
//   '&:hover, &.Mui-focusVisible': {
//     zIndex: 1,
//     '& .MuiImageBackdrop-root': {
//       opacity: 0.15,
//     },
//     '& .MuiImageMarked-root': {
//       opacity: 0,
//     },
//     '& .MuiTypography-root': {
//       border: '4px solid currentColor',
//     },
//   },
// }));

// const ImageSrc = styled('span')({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center 40%',
// });

// const Image = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   color: theme.palette.common.white,
// }));

// const ImageBackdrop = styled('span')(({ theme }) => ({
//   position: 'absolute',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: theme.palette.common.black,
//   opacity: 0.4,
//   transition: theme.transitions.create('opacity'),
// }));

// const ImageMarked = styled('span')(({ theme }) => ({
//   height: 5,
//   width: 18,
//   backgroundColor: theme.palette.common.white,
//   position: 'absolute',
//   bottom: -2,
//   left: 'calc(50% - 9px)',
//   transition: theme.transitions.create('opacity'),
// }));

// const openSiteInNewTab = (site) => {
//   window.open(site, '_blank'); 
// };


function Rapid() {
  const handleClick = (event) => {
    event.preventDefault();
    window.open('https://sslinux.btsolve.com/btssite/', '_blank');
  }
  return (
    // <div className="Column2">
    //   <div className="RapidImage">
    //     <div className="RapidCard">
    //         <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    //           {images.map((image) => (
    //             <ImageButton
    //               focusRipple
    //               key={image.title}
    //               style={{
    //                 width: image.width,
    //               }}
    //               onClick={() => openSiteInNewTab(image.site)} // Handle click event
    //             >
    //               <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
    //               <ImageBackdrop className="MuiImageBackdrop-root" />
    //               <Image>
    //                 <Typography
    //                   component="span"
    //                   variant="subtitle1"
    //                   color="inherit"
    //                   sx={{
    //                     position: 'relative',
    //                     p: 4,
    //                     pt: 2,
    //                     pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
    //                   }}
    //                 >
    //                   {image.title}
    //                   <ImageMarked className="MuiImageMarked-root" />
    //                 </Typography>
    //               </Image>
    //             </ImageButton>
    //           ))}
    //         </Box>
    //         <div className="RapidCardInside">
    //           <h2>This is a card title</h2>
    //           <p>This is some content for the card. You can add more content here or an image.</p>
    //           <a href="https://loganix.com/link-relevance/" className="card-link">Learn More</a>
    //         </div>
    //       </div>
    //       <div className="RapidDefinition">
    //         <div className="RapidAcro"
    //         data-aos="zoom-in-right"
    //         data-aos-duration="1000"
    //         data-aos-easing="ease-in-out"
    //         data-aos-mirror="true"
    //         data-aos-once="false"
    //         data-aos-anchor-placement="top-center"
    //         >
    //           Resource Associates for Professional and Integrative Development
    //         </div>
    //         <br/><br/><br/>
    //         <div className="RapidDescription"
    //         data-aos="zoom-in-up"
    //         data-aos-duration="1000"
    //         data-aos-easing="ease-in-out"
    //         data-aos-mirror="true"
    //         data-aos-once="false"
    //         data-aos-anchor-placement="top-center"
           
    //         >
    //           RAPID offers a suite of tools developed and designed specifically for professionals to jumpstart and advance their careers. These tools were developed in partnership with the Ateneo Bulatao Center for Psychological Services as part of a commitment to IMEC. Initially focused on improving the careers of maritime professionals, the initiative has expanded to encompass professionals in any industry.            
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="RapidSection">
          <div className="RapidWrapper">
            <div className="RapidCardContainer"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            onClick={handleClick}
            >
                <div className="RapidCard">
                    <div className="RapidImageBackground">
                      <img src="seawoman1.png" alt="Bangtan" className="seawoman"/>
                    </div>
                    <div className="Rapidinfo">
                        <div className="RapidPara">
                        </div>
                            
                        <a href="https://rapidonline.ph/guest/dashboard" target="_blank" id="cardLink" className="RapidButton" onClick={handleClick}>
                            View more
                        </a>
                    </div>
                </div>
            </div>
            <div className="RapidDefine">
                <div className="RapidsDefineTitle"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                    <div>
                      Resource Associates for Professional and Integrative Development
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="RapidDefineParagraph1">
                  RAPID offers a suite of tools developed and designed specifically for
                  professionals to jumpstart and advance their careers. These tools were 
                  developed in partnership with the Ateneo Bulatao Center for Psychological 
                  services as part of a commitment to IMEC. Initially focused on improving the 
                  careers of maritime professionals, the initiative has expanded to encompass 
                  professionals in any industry.            
                </div>
                <br/><br/>
            </div>
          </div>
        </div>
  );
}

export default Rapid;
