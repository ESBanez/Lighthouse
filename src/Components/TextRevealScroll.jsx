import "../Sass/TextRevealScroll.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
function TextRevealScroll() {
    AOS.init();

    return (
        <div className="black">
            <section className="row 8 scroll-reveal"> 
                <h4 className="section-title">
                    <div className="TextReavealLogo"
                    data-aos="fade-in-down"
                    >
                        <img src="lhi-logo.png"
                         style={{width: '15rem'}}/>
                        
                    </div>
                </h4>
                <br/><br/><br/><br/><br/>
                <div className="blackp">
                    <span className="clan1">
                        Is a maritime BPO with strong technological 
                        foundation with professional and competent staff that 
                        would provide tech support services, maritime accounting,
                        career management and other services.
                    </span>
                    
                </div>
            </section>
        </div>
    );
}

export default TextRevealScroll;
