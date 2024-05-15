import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Navbar from "./../Components/Navbar";
import CarouselComponent from "./../Components/CarouselComponent/CarouselComponent";
import MissionVision from "./../Components/MissionVision";
import LighthousePart from "./../Components/LighthousePart";
import Btsolve from "./../Components/Btsolve";
import Rapid1 from "./../Components/Rapid1";
import Service from "../Components/Service";
import FooterKen from "./../Components/FooterKen";
import "../Sass/Home.css";

function Home() {
    React.useEffect(() => {
        AOS.init();
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{display:"flex", flexDirection:"column"}}>
                    <div>
                        <nav><Navbar/></nav>
                    </div>
                    <div className="carouselComp">
                        <CarouselComponent onScrollToSection={scrollToSection} />
                    </div>
                    <br /><br /><br />
                    <br /><br /><br />
                    <div>
                        <MissionVision/>
                    </div>
                    <br /><br /><br />
                    <div className="TextReveal" id="section2">
                        <LighthousePart onScrollToSection={scrollToSection} />
                    </div>
                    <div className="btrapiserv">
                        <div className="" id="section5"> 
                            <Btsolve onScrollToSection={scrollToSection} />
                        </div>
                        <div style={{backgroundColor:"white", height:"10vh"}}></div>
                        <div className="Rapidite" id="section3">
                            <Rapid1 onScrollToSection={scrollToSection} />
                        </div>
                        <div style={{backgroundColor:"white", height:"30vh"}}></div>
                        <div className="servicehomediv container" id="services">
                            <Service onScrollToSection={scrollToSection} />
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <div id="section4" className="Footer"> 
                            <FooterKen/>
                        </div>
                    </div>
                </Grid>
            </Box>
        </>
    );
}

export default Home;
