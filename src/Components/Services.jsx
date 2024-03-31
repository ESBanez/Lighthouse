import "../Sass/Services.css"
import {Link} from 'react-router-dom'

 

const lighthouseServices = [ 

  { 

    url: '../public/bookkeeping.jpg', 

    title: 'Bookkeeping', 

    width: '100%', 

    height: '100%', 

    site: 'https://rapidonline.ph/guest/dashboard', 

    key: 1 

  }, 

  { 

    url: '../public/content-creation.jpg', 

    title: 'Content-Creation', 

    width: '100%', 

    height: '100%', 

    site: 'https://rapidonline.ph/guest/dashboard', 

    key: 2 

  }, 

  { 

    url: '../public/socialmediapostingschedule.jpg', 

    title: 'Social Media Post', 

    width: '100%', 

    height: '100%', 

    site: 'https://rapidonline.ph/guest/dashboard', 

    key: 3 

  }, 

  { 

    url: '../public/socialmediaads.jpg', 

    title: 'Advertisement', 

    width: '100%', 

    height: '100%', 

    site: 'https://rapidonline.ph/guest/dashboard', 

    key: 4 

  }, 

  { 

    url: '../public/socialmediaanalytics.jpg', 

    title: 'Social Media Analytics', 

    width: '100%', 

    height: '100%', 

    site: 'https://rapidonline.ph/guest/dashboard', 

    key: 5 

  }, 

  { 

    url: '../public/social-media-management.jpg', 

    title: 'Video Production', 

    width: '100%', 

    height: '100%', 

    site: 'https://rapidonline.ph/guest/dashboard', 

    key: 6 

  }, 

]; 

 
function Services() {
  return (
    <div className="TheServices">
      <div className="canvas-wrapper">
        <div className="grid-container">
          {lighthouseServices.map((service, index) => (
            <div key={index} className="grid-item">
              <a href={service.site} target="_blank" rel="noopener noreferrer" className="canvas">
                <div className="canvas_border">
                  <svg>
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'rgb(253,137,68)', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: 'rgb(153,75,23)', stopOpacity: 1 }}></stop>
                      </linearGradient>
                    </defs>
                    <rect className="rect-gradient" fill="none" stroke={`url(#grad-${index})`} strokeLinecap="square" strokeWidth="4" strokeMiterlimit="30" width="100%" height="100%"></rect>
                  </svg>
                </div>
                <div className="canvas_img-wrapper">
                  <img className="canvas_img" src={service.url} alt={service.title} style={{ width: service.width, height: service.height }} />
                </div>
                <div className="canvas_copy canvas_copy--left">
                  <div>
                    <span className="canvas_copy_subtitle">Heading</span>
                    <strong className="canvas_copy_title">{service.title}</strong>
                    <Link to="./ServicesInfo" className="canvas_copy_details">Click for more</Link>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;