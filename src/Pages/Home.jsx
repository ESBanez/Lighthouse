import DrawerAppBar from "./../Components/Navbar";
import WaveDivider from "./../Components/WaveDivider";
import TextRevealScroll from "./../Components/TextRevealScroll";
import "../Sass/Home.css";
import Headline from "./../Components/Headline";
import Rapid from "./../Components/Rapid";


function Home() {
    return (
        <>
            <nav><DrawerAppBar/></nav>
            <div>
                <img src="anna-rosar-ZxFyVBHMK-c-unsplash.jpg" 
                    alt="Lighthouse"
                    className= "lhi"
                />
                <div className="Changingline" id="section1">
                    <Headline/>
                </div>

            </div>
            <div className="Wave">
                <WaveDivider/>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="TextReveal" id="section2">
                <TextRevealScroll/>
            </div>
            <br/><br/><br/><br/>

            {/* Additional spacing for small devices */}

            <div className="Rapidite">
                <Rapid/>
            </div>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>

        </>
    )
}

export default Home;
