import "../Sass/LighthousePart.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
function LighthousePart() {
    AOS.init();

    return (
        <div className="lighthousecomponent">
            <section className="lighthousesection"> 
                <h4 className="lighthousehead">
                    <div className="TextReavealLogo lighthouselogocomponent"
                    data-aos="fade-in-down"
                    >
                        <img src="lhi-logo.png"
                         style={{width: '15rem'}} className="lighthouselogo"/>
                        
                    </div>
                </h4>
                <br/>
                <div className="lighthousebody">
                    <div className="lighthousedefinition">
                        <div className="lighthousetextdefine">
                            <div data-aos="fade-right">
                            "Delivering value through
                            </div>
                            <div data-aos="fade-left">
                            technology, support and career growth."
                            </div>
                        </div>              
                    </div>
                    <div className="lighthousedefinition">
                        <div className="lighthouseimagecomponent">
                            <a href="#services">
                                <img src="pinoyseaman.png" className="lighthouseimage" data-aos="zoom-in-up"/>
                            </a>
                        </div>              
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LighthousePart;
