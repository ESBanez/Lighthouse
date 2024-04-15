import '../Sass/Footer.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
emailjs.init('-DhGdulE7p83TuON2')


function Footer() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');



  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
    <footer className="footer">
      <div className="footercontainer">
        <div className="footer_inner">
          <div className="c-footer">
            <div className="layout">
              <div className="layout_item firstlayout">
                <div className="newsletter">
                  <form action="" onSubmit={handleSubmit} className='forma'>
                     <textarea
                    className="custom-textarea"
                    name="message"
                    placeholder={"Hey! you can leave us a message here."}
                    value={message}
                    onChange={handleMessageChange}
                    style={{
                      padding: '0', // Remove padding
                      border: 'none', // Remove border
                      marginTop: '10px',
                      resize: 'none', // Disable textarea resize
                      outline: 'none', // Remove outline
                      boxShadow: 'none', // Remove box shadow
                      lineHeight: '1.2', // Adjust line height
                      backgroundColor: 'transparent', // Make background transparent
                      color: '#000', // Adjust text color
                      cursor: 'text', // Change cursor to text
                    }}
                  />
                    <div className="EmailAndSend">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email Address"
                        required
                      />
                      <button id="button" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                      </button>
                    </div>

                  </form>
                </div>
              </div>
              <div className="layout_item w-25 ">
                <nav className="c-nav-tool">
                  <h4 className="c-nav-tool_title">Menu</h4>
                  <ul className="c-nav-tool_list LahatNgUl">
                    <li>
                      <a href="#section2" className="c-link AllA">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#section3" className="c-link AllA">
                        Rapid
                      </a>
                    </li>
                    <li>
                      <a href="#section5" className="c-link AllA">
                        Btsolve
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="layout_item w-25">
                <nav className="c-nav-tool">
                  <h4 className="c-nav-tool_title">Email us</h4>
                  <ul className="c-nav-tool_list LahatNgUl">
                    <li className="c-nav-tool_item">
                      <a href="#section2" className="c-link AllA">
                        info@lighthousemanila.com
                      </a>
                    </li>
                    <li className="c-nav-tool_item">
                      <a href="#section5" className="c-link AllA">
                        info@btsolve.com
                      </a>
                    </li>
                    <li className="c-nav-tool_item">
                      <a href="#section3" className="c-link AllA">
                        info@rapidonline.ph
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <br/>
            <div className="layout c-2">
              <div className="layout_item">
                <ul className="LahatNgFlex LahatNgUl">
                  <li>
                    <a href="#section5" className="footerlogoholder" ><img src="logo1.png"/></a>
                  </li>
                  <li>
                    <a href="#section3" className="footerlogoholder" ><img src="logo2.png"/></a>
                  </li>
                  <li>
                    <a href="#section2" className="footerlogoholder" ><img src="logo3.png"/></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
