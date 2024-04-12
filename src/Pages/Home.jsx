import WaveDivider2 from "./../Components/WaveDivider2";
import WaveDivider from "./../Components/WaveDivider";
import LighthousePart from "./../Components/LighthousePart";
import "../Sass/Home.css";
import Rapid1 from "./../Components/Rapid1";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Btsolve from "./../Components/Btsolve"
// import Services from "./../Components/Services";
import Footer from "./../Components/Footer";
import Navbar from "./../Components/Navbar";
import CarouselComponent from "./../Components/CarouselComponent/CarouselComponent";
import MissionVision from "./../Components/MissionVision";
import Service from "../Components/Service";



function Home() {
    AOS.init();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <nav><Navbar/></nav>
                    </Grid>
                    <Grid item xs={12} className="carouselComp">
                                <CarouselComponent />
                    </Grid>
                    <Grid item xs={12} >
                                <WaveDivider/>
                    </Grid>
                    <Grid item xs={12} >
                                <MissionVision/>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="TextReveal" id="section2">
                            <LighthousePart/>
                        </div>
                    </Grid>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <Grid item xs={12}>
                        <div className="Btsolving" id="section5"> 
                            <Btsolve/>
                        </div>
                    </Grid>
                   
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <Grid item xs={12}>
                        <div className="Rapidite" id="section3">
                            <Rapid1/>
                        </div>
                    </Grid>
                    <br/><br/><br/><br/><br/><br/>
                    <Grid item xs={12} className="servicesbackground">
                        <div id="services" style={{}}>
                            <Service/>
                        </div>
                    </Grid>

                    {/* <Grid item xs={12} className="Services">
                        <div id="services">
                            <Services/>
                        </div>
                    </Grid> */}
   
                    <Grid item xs={12}>
                            <div className="Wave">
                                <WaveDivider2/>
                            </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div id="section4" className="Footer" > 
                            <Footer/>
                        </div>
                    </Grid>
                    
                </Grid>
            </Box>
            
        </>
    )
}

export default Home;
