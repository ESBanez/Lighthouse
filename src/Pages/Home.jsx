import DrawerAppBar from "./../Components/Navbar";
import WaveDivider from "./../Components/WaveDivider";
import TextRevealScroll from "./../Components/TextRevealScroll";
import "../Sass/Home.css";
import Headline from "./../Components/Headline";
import Rapid from "./../Components/Rapid";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
// import Btsolve from "./../Components/Btsolve"



function Home() {
    AOS.init();

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <nav><DrawerAppBar/></nav>
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
                        width: "100%"
                    }}
                    >
                        <div className="TextReveal" id="section2"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        >
                            <TextRevealScroll/>
                        </div>
                    </Grid>
                    <Grid item xs={12}

                    >
                        <div className="Rapidite"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="10"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                            <Rapid/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div
                        data-aos="fade-up"

                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        > 
                            {/* <Btsolve/> */}
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
        </>
    )
}

export default Home;
