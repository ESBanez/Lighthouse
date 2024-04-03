import styled from 'styled-components';
import "../Sass/Navbar.css"

const NavbarContainer = styled.nav`
  padding: 1rem;

  @media (min-width: 993px) and (max-width: 2000px) {
    background-color: white;
    color: white;

    .nav-link {
      color: white; // Set the color explicitly for the text links
    }

    .navbar-toggler-icon {
      border-color: var(--blue); // Set the color for the border of the burger button
    }
  }

  @media (min-width: 0px) and (max-width: 993px) {
    background-color: white;
    color: white;

    .nav-link {
      color: white; // Set the color explicitly for the text links
    }

    .navbar-toggler-icon {
      border-color: var(--blue); // Set the color for the border of the burger button
    }
  }
`;


function Navbar() {
  return (
    <NavbarContainer className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <img src="lhi-logo.png" className="navbar-brand" style={{ width: "10rem"}} alt="Your Brand Name" />
        <button className="navbar-toggler" style={{borderColor: "var(--blue)"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{borderColor: "var(--blue)"}}></span>
        </button>
        <div className="collapse navbar-collapse" style={{}} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0" 
          style={{    
            display: "flex", 
            fleFlow: "row",
            justifyContent: "space-evenly"
            }}>
            <li className="nav-item">
              <a className="nav-link active" style={{color:"var(--blue)"}} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"var(--blue)"}} href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"var(--blue)"}} href="#" role="button" aria-expanded="false">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{color:"var(--blue)"}} href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
