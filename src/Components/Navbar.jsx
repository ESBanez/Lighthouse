import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import "../Sass/Navbar.css";

const NavbarContainer = styled.nav`
  padding: 1rem;
  
  @media (min-width: 993px) and (max-width: 2000px) {
    background-color: white;
    color: white;
    .nav-link { color: black; }
  }

  @media (min-width: 0px) and (max-width: 993px) {
    background-color: white;
    color: black; 
    .nav-link { color: black; }
  }
`;

function Navbar() {
  const location = useLocation(); // Get the current URL path
  const navigate = useNavigate(); // For navigation

  // Function to scroll to section smoothly
  // const scrollToSection = (sectionId) => {
  //   setTimeout(() => {
  //     const section = document.getElementById(sectionId);
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 100);
  // };

  // Click handler for About, Updates, and Contact links
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
    <NavbarContainer className="navbar navbar-expand-xl navbarmaincomponent">
      <div className="container-fluid px-lg-5">
        <div className="d-flex align-items-center navbarlogoholder">
          <img src="lhi-logo.png" className="navbar-brand" alt="Lighthouse-logo" onClick={() => navigate("/")} />
        </div>
        <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
          <button className="navbar-toggler order-lg-2" style={{ borderColor: "light" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ borderColor: "light" }}></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end order-lg-1" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick("about")} className="nav-link btn-link">About</button>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>            </li>
            <li className="nav-item">
              <button onClick={() => handleNavClick("contact")} className="nav-link btn-link">Contact</button>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link">Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
