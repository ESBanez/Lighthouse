import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Navbar from "./../Components/Navbar";
import CarouselComponent from "./../Components/CarouselComponent/CarouselComponent";
import MissionVision from "./../Components/MissionVision";
import LighthousePart from "./../Components/LighthousePart";
// import Btsolve from "./../Components/Btsolve";
import Rapid2 from "./../Components/Rapid2";
// import Service from "../Components/Service";
import FooterKen from "./../Components/FooterKen";
import "../Sass/Home.css";
import Btsolve2 from '../Components/Btsolve2';
// import Timelinee from '../Components/Timelinee';
import Testimonials from "../Components/Testimonials";

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
                <Grid container className='grid' rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{display:"flex", flexDirection:"column"}}>
                    <div>
                        <nav><Navbar/></nav>
                    </div>
                    <div className="carouselComp">
                        <CarouselComponent onScrollToSection={scrollToSection} />
                    </div>

                    <div className="btrapiserv">
                        <div className="spacer"></div> {/* Use CSS to create space */}
                        <div className="missionvi">
                            <MissionVision/>
                        </div>

                        <div className="spacer"></div> {/* Use CSS to create space */}

                        <div className="TextReveal" id="section2">
                            <LighthousePart onScrollToSection={scrollToSection} />
                        </div>
                        <div className="spacer"></div> {/* Use CSS to create space */}

                        <div className="" id="section5"> 
                            {/* <Btsolve onScrollToSection={scrollToSection} /> */}
                            <Btsolve2 onScrollToSection={scrollToSection} /> 
                        </div>
                        <div className="spacer"></div> {/* Use CSS to create space */}
                        <div className="spacer"></div> {/* Use CSS to create space */}
                        <div className="Rapidite" id="section3">
                            <Rapid2 onScrollToSection={scrollToSection} />
                        </div>
                        <div className="spacer"></div> {/* Use CSS to create space */}
                        <div className="spacer"></div> {/* Use CSS to create space */}
                        <div className="client">
                            <Testimonials/>
                        </div>
                        <div className="spacer"></div> {/* Use CSS to create space */}
                        <div className="spacer"></div> {/* Use CSS to create space */}

                        
                        <div className="spacer"></div> {/* Use CSS to create space */}

                        <div className="spacer"></div> {/* Use CSS to create space */}

                    </div>
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
