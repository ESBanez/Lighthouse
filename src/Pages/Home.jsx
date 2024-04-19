// import WaveDivider2 from "./../Components/WaveDivider2";
// import WaveDivider from "./../Components/WaveDivider";
import LighthousePart from "./../Components/LighthousePart";
import Rapid1 from "./../Components/Rapid1";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Btsolve from "./../Components/Btsolve"
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
                    <div className="carouselComp">
                        <CarouselComponent/>
                    </div>
                    <br /><br /><br />
                    <br /><br /><br />
                    <div>
                        <MissionVision/>
                    </div>
                    <br /><br /><br />
                    <div className="TextReveal" id="section2">
                        <LighthousePart/>
                    </div>
                    <div className="btrapiserv">
                        <div className="" id="section5"> 
                            <Btsolve/>
                        </div>
                        <div style={{backgroundColor:"white", height:"10vh"}}></div>
                        <div className="Rapidite" id="section3">
                            <Rapid1/>
                        </div>
                        <div style={{backgroundColor:"white", height:"30vh"}}></div>
                        <div className="servicehomediv container" id="services" >
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
                    <br /><br />
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
