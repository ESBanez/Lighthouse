import { useState } from 'react';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import emailjs from 'emailjs-com';
import "../Sass/footerken.css";
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import "../Sass/Navbar.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';


// Initialize emailjs
emailjs.init('rwtQS8LXen3PXBWRU');

function FooterKen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [message, setMessage] = useState('');

    
    const location = useLocation(); // Get the current URL path
    const navigate = useNavigate(); // For navigation


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    };

    const handleInquiryChange = (e) => {
        setInquiry(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const btn = document.getElementById('button');
        btn.textContent = 'Sending...';

        try {
            const formData = {
                name,
                email,
                phone,
                company,
                inquiry,
                message,
            };
            await emailjs.send('service_kq880qc', 'template_j67t39c', formData, 'rwtQS8LXen3PXBWRU');
            alert('Email sent successfully!');


            // Reset form fields
            setName('');
            setEmail('');
            setPhone('');
            setCompany('');
            setInquiry('');
            setMessage('');

            btn.textContent = 'Submit';
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
            btn.textContent = 'Submit';
        }
    };

    const handleNavClick = (sectionId) => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          } else if (location.pathname !== "/") {
            navigate("/"); // Only navigate to home if the section doesn't exist on the current page
            setTimeout(() => {
              const newSection = document.getElementById(sectionId);
              if (newSection) {
                newSection.scrollIntoView({ behavior: "smooth" });
              }
            }, 300);
          }
        }, 100);
      };
      

    return (
        <div className="footercomponent">
            <video autoPlay loop muted className="video-background">
                <source src="backvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="footerbody container" >
                <form className="footerform" onSubmit={handleSubmit} data-aos="fade-right">
                    <div className="footernameemail">
                        <div className="px-3">
                            <TextField
                                id="name"
                                label="Full name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </div>
                        <div className="px-3">
                            <TextField
                                id="email"
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <FormHelperText id="email-helper-text">
                                Enter a valid email address
                            </FormHelperText>
                        </div>
                    </div>
                    <div className="footerphonecompany">
                        <div className="px-3">
                            <TextField
                                id="phone"
                                label="Phone number"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                        <div className="px-3">
                            <TextField
                                id="company"
                                label="Company"
                                value={company}
                                onChange={handleCompanyChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="px-3">
                        <TextField
                            id="inquiry"
                            label="Inquiries"
                            multiline
                            style={{ width: "100%" }}
                            value={inquiry}
                            onChange={handleInquiryChange}
                            required
                        />
                    </div>
                    <br />
                    <div className="footerinquiries">
                        <div className="footerinquiriestab px-3">
                            <TextField
                                id="message"
                                label="Message"
                                multiline
                                rows={8}
                                style={{ width: "100%" }}
                                value={message}
                                onChange={handleMessageChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="footersubmit">
                        <Button variant="contained" id="button" type="submit">Submit</Button>
                    </div>
                </form>
                <div className="footeremail" >
                    <div className="footeremailcardtab" data-aos="fade-left">
                        <Card sx={{ 
                            maxWidth: 340,  
                            width: "15rem",
                            boxShadow: "5px 5px 25px 0px rgba(46, 61, 73, 0.2)",
                            borderRadius: "10px",
                        }}>
                            <CardMedia
                                component="iframe"
                                title="Altoha Building Location"
                                height="150"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1113764058726!2d120.98279201446428!3d14.562442280006851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8e599ca44df%3A0x3b77c764b7c6da6e!2s2100%20Madre%20Ignacia%20St%2C%20Malate%2C%20Manila%2C%201004%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1642095819724!5m2!1sen!2sph"
                                allowFullScreen
                                target="_blank"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                3/F Altoha Bldg. 2100, Madre Ignacia St., Malate, Manila
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
                                <a href="https://maps.app.goo.gl/jdBvbtUrrAWP8Wne7" target='_blank'>
                                    <Button size="small">Locate</Button>
                                </a>
                                <a href="https://maps.app.goo.gl/jdBvbtUrrAWP8Wne7" target='_blank'>
                                    <Button size="small">Share</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="footeremailtab" data-aos="fade-up">
                        <div className="footeremailustitle" >
                            Email Us
                        </div>
                        <div className="footeremaillist">
                            <li className="c-nav-tool_item">
                                <a href="#section2" className="emails" style={{color: 'white'}}>
                                    info@lighthousemanila.com
                                </a>
                            </li>
                            <li className="c-nav-tool_item">
                                <a href="#section5" className="emails" style={{color: 'white'}}>
                                    support@btsolve.com
                                </a>
                            </li>
                            <li className="c-nav-tool_item">
                                <a href="#section3" className="emails" style={{color: 'white'}}>
                                    info@rapidonline.ph
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <div>
                        <a href="https://www.facebook.com/lighthouseinnovationsmanila/" 
                        className="footeremailustitle" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        data-aos="fade-up">
                            <FacebookOutlinedIcon style={{ fontSize: 40 }} />
                        </a>

                        <hr style={{color: "white"}} />
                        <div className="footeremaillist" data-aos="fade-up">
                            <Link to="/leaders" className="nav-link">
                                Our Leadership
                            </Link>
                            <li className="c-nav-tool_item">
                                <Link to="/team" className="nav-link">
                                    Our Team
                                </Link>
                            </li>
                            <li className="c-nav-tool_item">
                                <Link to="/interns" className="nav-link">
                                    Our Interns
                                </Link>
                            </li>
                            <li className="c-nav-tool_item">
                                <Link to="/blog" className="nav-link">
                                    Blog
                                </Link>
                            </li>
                        </div>
                    </div>
            </div>
            <br />
            <div className="footerlogo container">
                <div className="footerlogotab">
                    <a href="#section5" className="footerlogoholder" onClick={() => handleNavClick("section5")} >
                        <img src="logo btsolve black.png" alt="BTSolve Logo"/>
                    </a>
                    <a href="#section3" className="footerlogoholder"onClick={() => handleNavClick("section3")} >
                        <img src="logo rapid.png" alt="Rapid Logo"/>
                    </a>
                    <a href="#section2" className="footerlogoholder" onClick={() => handleNavClick("about")} >
                        <img src="logo lighthouse.png" alt="Lighthouse Logo"/>
                    </a>
                </div>
            </div>
            <div className="footerall">
                <div className="footeralltab">
                    All rights reserved 2024.
                </div>
            </div>
        </div>
    );
}

export default FooterKen;
