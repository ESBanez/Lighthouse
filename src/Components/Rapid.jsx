import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import "../Sass/Rapid.css"
import 'aos/dist/aos.css'; 

const images = [
  {
    url: '/public/seawoman1.jpg',
    title: 'View more',
    width: '50%',
    height: '50%',
    site: 'https://rapidonline.ph/guest/dashboard',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 800,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 1000,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 5,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const openSiteInNewTab = (site) => {
  window.open(site, '_blank'); // Open the provided URL in a new tab
};

function Rapid() {
  return (
    <div className="Column2">
      <div className="RapidImage">
        <div className="">
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
              {images.map((image) => (
                <ImageButton
                  focusRipple
                  key={image.title}
                  style={{
                    width: image.width,
                  }}
                  onClick={() => openSiteInNewTab(image.site)} // Handle click event
                >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      {image.title}
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
              ))}
            </Box>
          </div>
          <div className="RapidDefinition">
            <div className="RapidAcro">
            Resource Associates for Professional and Integrative Development
            </div>
            <br/><br/><br/>
            <div className="RapidDescription">
            RAPID offers a suite of tools developed and designed specifically for professionals to jumpstart and advance their careers. These tools were developed in partnership with the Ateneo Bulatao Center for Psychological Services as part of a commitment to IMEC. Initially focused on improving the careers of maritime professionals, the initiative has expanded to encompass professionals in any industry.            </div>
          </div>
          <div className="Rapidtxt">
            <div style={{display:"flex"}}>
              <div >
                <img src="Rapid-logo.png" alt="Rapid" className="RapidlogoImage"/>
              </div>
              <div className="Rapidtxtlogo">
                R A P I D
              </div>
            </div>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>



          <div className='RapidAccelerate'>
            Accelerating change for the better.
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>

  );
}

export default Rapid;
