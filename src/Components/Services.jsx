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
        <br/>
        <div className="ServicesHead">
          Our Services
        </div>
        <br/><br/>
        <div className="ServicesBand">

            <div className="item-1">
              <a href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>

            <div className="item-2">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>

            <div className="item-3">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>
            
            <div className="item-4">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceParagraph">
                    Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!
                  </div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>

            <div className="item-5">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>

            
            <div className="item-6">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>

            
            <div className="item-7">
              <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="ServiceCard">
                <div className="thumb" style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)' }}></div>
                <article>
                  <div className="ServiceHeading">International Artist Feature: Malaysia</div>
                  <div className="ServiceName">Mary Winkler</div>
                </article>
              </a>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Services;