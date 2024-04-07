import WaveDivider2 from "./../Components/WaveDivider2";
import WaveDivider from "./../Components/WaveDivider";
import LighthousePart from "./../Components/LighthousePart";
import "../Sass/Home.css";
import Headline from "./../Components/Headline";
import Rapid1 from "./../Components/Rapid1";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import Btsolve from "./../Components/Btsolve"
import Services from "./../Components/Services";
import Footer from "./../Components/Footer";
import Navbar from "./../Components/Navbar";



function Home() {
    AOS.init();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <nav><Navbar/></nav>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="panel1">
                            <img src="anna-rosar-ZxFyVBHMK-c-unsplash.jpg" 
                                alt="Lighthouse"
                                className= "lhi"
                            />
                            <div className="Changingline" id="section1">
                                <Headline/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                            <div className="Wave">
                                <WaveDivider/>
                            </div>
                    </Grid>
                    <Grid item xs={12}
                    style={{
                        backgroundColor: "white",
                        height: "auto !important",  
                        width: "100%",

                    }}
                    >
                        <div className="TextReveal" id="section2">
                            <LighthousePart/>
                        </div>
                    </Grid>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <Grid item xs={12}>
                        <div className="Rapidite">
                            <Rapid1/>
                        </div>
                    </Grid>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <br/><br/><br/><br/>
                    <Grid item xs={12}>
                        <div className="Btsolving" id="section5"> 
                            <Btsolve/>
                        </div>
                    </Grid>
                    <br/><br/><br/><br/><br/><br/>
                    

                    <Grid item xs={12} className="Services">
                        <div id="section3">
                            <Services/>
                        </div>
                    </Grid>
   
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
