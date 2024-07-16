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
import MyDivider from '../Components/Divider';
import ProductCarousel from '../Components/ProductCarousel';
import "../Javascript/home.js";
import { FloatButton } from 'antd';

function Home() {
    React.useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <>
            <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', margin: '0'}}>
                <Grid container className='grid' rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginLeft: 0, marginRight: 0, display: 'flex', flexDirection: 'column' }}>
                    <div>
                        <nav><Navbar/></nav>
                    </div>

                    <div className="carouselComp" >
                        <CarouselComponent onScrollToSection={scrollToSection} />
                    </div>
                    <div className="spacer"></div>  
                    <div className="spacer"></div>  

                    <div style={{padding: '2rem', display: 'flex', justifyContent: 'center'}}>
                        <div style={{color: 'black', fontSize: '0.875rem'}}>
                        Lighthouse Innovations Inc. is a dynamic conglomerate dedicated 
                        to empowering businesses through the strategic use of technology.
                        </div>
                    </div>

                    <div className="btrapiserv">

                        <div className="spacer"></div>  

                        <div className='websitevideo'>
                            <video src="/lighthousewebvid.webm" muted controls autoPlay autoFocus loop className="videoStyles" controlsList="nodownload"></video>
                        </div>

                        <div className="missionvi">
                            <MissionVision/>
                        </div>

                        <div className="spacer"></div>  

                        <div className="TextReveal" id="about">
                            <LighthousePart onScrollToSection={scrollToSection} />
                        </div>
                        <div className="spacer"></div>  

                        <div className="" id="section5"> 
                           
                            <Btsolve2 onScrollToSection={scrollToSection} /> 
                        </div>
                     
                        <div className="spacer"></div>  
                        <div className="spacer"></div>  
                        
                        <div className="Rapidite" id="section3">
                            <Rapid2 onScrollToSection={scrollToSection} id="section3"/>
                        </div>

                         
                        <div className="spacer"></div>  
                        <div className="spacer"></div>  
                        <div className="client">
                            <Testimonials/>
                        </div>
                          
                        <div className="spacer"></div>  
                        <div className="spacer"></div>  

                        <div className="mydividerprod">
                            <MyDivider/>
                            <ProductCarousel/>
                        </div>
                    </div>
                    <FloatButton.BackTop visibilityHeight={1} onClick={scrollToTop} style={{ zIndex: "999999", height: '4rem', width: '4rem'}} />

                    <div>
                        <div id="contact" className="Footer"> 
                            <FooterKen/>
                        </div>
                    </div> 
                </Grid>
            </Box>
        </>
    );
}

export default Home;
