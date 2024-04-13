import WaveDivider2 from "./../Components/WaveDivider2";
import WaveDivider from "./../Components/WaveDivider";
import LighthousePart from "./../Components/LighthousePart";
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
import "../Sass/Home.css";



function Home() {
    AOS.init();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{display:"flex", flexDirection:"column"}}>
                    <div >
                        <nav><Navbar/></nav>
                    </div>
                    {/* <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                            className="bluewave"
                            style={{transform: "scaleX(-1)", margin: "0", zIndex:"-2", width:"fit-content"}}>
                                <path fill="var(--blue)" style={{fillOpacity:"1", width: "100%"}} d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
                                </path>
                        </svg>
                    </div> */}
                    <div className="carouselComp">
                                <CarouselComponent/>
                    </div>
                    <div>
                                <MissionVision/>
                    </div>
                    <div>
                        <div className="TextReveal" id="section2">
                            <LighthousePart/>
                        </div>
                    </div>
                    <div>
                        <div className="" id="section5"> 
                            <Btsolve/>
                        </div>
                    </div>

                    <div>
                        <div className="Rapidite" id="section3">
                            <Rapid1/>
                        </div>
                    </div>
                    <br /><br />
                    <div className="servicesbackground">
                        <div id="services" style={{}}>
                            <Service/>
                        </div>
                    </div>

                    {/* <Grid item xs={12} className="Services">
                        <div id="services">
                            <Services/>
                        </div>
                    </Grid> */}
{/*    
                    <div>
                            <div className="Wave">
                                <WaveDivider2/>
                            </div>
                    </div> */}
                    <div>
                        <div id="section4" className="Footer" > 
                            <Footer/>
                        </div>
                    </div>
                    
                </Grid>
            </Box>
            
        </>
    )
}

export default Home;
