
import "../Sass/Rapid.scss";
import 'aos/dist/aos.css'; 

function Rapid1() {
    const handleClick = (event) => {
        event.preventDefault();
        window.open('https://sslinux.btsolve.com/btssite/', '_blank');
      }
    
    return(
        <div className="container-fluid RapidSection text-center text-dark">
            <div className="row">
                <div className="col-xl-6 offset-md text-white">
                    <div className="RapidWrapper">
                        <div className="RapidCard"
                                data-aos="zoom-in-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
                                onClick={handleClick}>
                            <div className="">
                                <img src="seawoman1.png" alt="Bangtan" className="seawoman"/>
                            </div>
                            {/* <div className="Rapidinfo"> 
                                <a href="https://rapidonline.ph/guest/dashboard" target="_blank" id="cardLink" className="RapidButton" onClick={handleClick}>
                                    View more
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 offset-md text-white">
                    <div className="RapidDefine">
                        <div className="RapidsDefineTitle"
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        >
                            <div>
                            Resource Associates for Professional and Integrative Development
                            </div>
                        </div>
                        <br/><br/><br/><br/>
                        <div className="RapidDefineParagraph1">
                            RAPID offers a suite of tools developed and designed specifically for
                            professionals to jumpstart and advance their careers. These tools were 
                            developed in partnership with the Ateneo Bulatao Center for Psychological 
                            services as part of a commitment to IMEC. Initially focused on improving the 
                            careers of maritime professionals, the initiative has expanded to encompass 
                            professionals in any industry.            
                        </div>
                        <br/> <br/>
                        <div className="RapidDefineButton">
                            <a href="https://rapidonline.ph/guest/dashboard" target="_blank" id="cardLink" className="RapidButton" onClick={handleClick}>
                                View more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}





export default Rapid1;