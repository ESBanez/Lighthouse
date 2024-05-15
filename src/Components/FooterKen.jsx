// Import necessary components
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
import "../Sass/footerken.css"

// Initialize emailjs
emailjs.init('-DhGdulE7p83TuON2')

function FooterKen () {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [message, setMessage] = useState('');

    // Event handlers for form inputs
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const btn = document.getElementById('button');
        btn.value = 'Sending...';

        try {
            await emailjs.sendForm('service_kq880qc', 'template_j67t39c', e.target, '-DhGdulE7p83TuON2');
            alert('Email sent successfully!');
            (true);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
        }
    };

    return (
        <div className="footercomponent">
            <div className="footerbody container">
                <form className="footerform" onSubmit={handleSubmit}>
                    {/* Name and Email fields */}
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
                    {/* Phone and Company fields */}
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
                                                

                    <br/>
                    {/* Inquiry field */}
                    <div className="px-3">
                        <TextField
                        id="message"
                        label="Inquiries"
                        multiline
                        style={{ width: "100%" }}
                        value={inquiry}
                        onChange={handleInquiryChange}
                        required
                        />
                    </div>
                                                

                    <br/>
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
                    {/* Submit button */}
                    <div className="footersubmit">
                        <Button variant="contained" id="button" type="submit">Submit</Button>
                    </div>
                </form>
        <div className="footeremail">
        {/* World map background */}
            <div className="footeremailcardtab">
                <Card sx={{ 
                    maxWidth: 340,  
                    width:"15rem"   ,
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
                        <Typography gutterBottom variant="h5" component="div">
                        Malate, Manila
                        </Typography>
                    </CardContent>

                    <CardActions style={{    display: "flex", justifyContent: "space-around"}}>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="footeremailtab">
                <div className="footeremailustitle">
                    Email Us
                </div>
                <div className="footeremaillist">
                        <li className="c-nav-tool_item">
                        <a href="#section2" className="emails">
                            info@lighthousemanila.com
                        </a>
                        </li>
                        <li className="c-nav-tool_item">
                        <a href="#section5" className="emails">
                            support@btsolve.com
                        </a>
                        </li>
                        <li className="c-nav-tool_item">
                        <a href="#section3" className="emails">
                            info@rapidonline.ph
                        </a>
                        </li>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <div className="footerlogo container"   
        // data-aos="fade-up-right"
        >
        <div className="footerlogotab">
            <a href="#section5" className="footerlogoholder">
                <img src="logo btsolve black.png"/>
            </a>

            <a href="#section3" className="footerlogoholder">
                <img src="logo rapid.png"/>
            </a>

            <a href="#section2" className="footerlogoholder">
                <img src="logo lighthouse.png"/>
            </a>

        </div>
    </div>
  </div>
);
}


export default FooterKen;