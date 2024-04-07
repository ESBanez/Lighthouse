import "../Sass/Services.scss"
// import {Link} from 'react-router-dom'

 

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
    <div className="TheServices" id="#section3">
      <div className="ServicesBody" id="services">
        <br/> <br/> <br/>
        <div className="ServicesHead">
          Our Services
        </div>
        <br/><br/>
        <div className="ServicesBand">

            <div className="item-1">
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(social-media-management.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Social Media Management</div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>

            <div className="item-2">
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(bookkeeping.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Book keeping </div>
                  <br/>
                  <div className="ServiceParagraph">
                    We are accustomed to book keeping services.
                  </div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>

            <div className="item-3">
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(content-creation.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Content creation</div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>
            
            <div className="item-4">
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(Technical-Ship-Management.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Technical Ship Management</div>
                  <div className="ServiceParagraph">
                  </div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>

            <div className="item-5">
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(socialmediaadvertisement.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Social Media Advertisement</div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>

            
            <div className="item-6">
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(Pinayseaman.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Social Media Creation with Ai</div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>

            
            <div className="item-7"
            >
              <a href="#" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(communityengagement.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">Community Engagement</div>
                  <div className="ServiceName">Lighthouse Innovations Inc</div>
                </article>
              </a>
            </div>
            <br/> <br/> <br/> <br/> <br/> 
        </div>
      </div>
    </div>
  );
}

export default Services;