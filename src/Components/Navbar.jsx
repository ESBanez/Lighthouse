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
  const refreshPage = () => {
    window.location.reload();
};

  return (
  <NavbarContainer className="navbar navbar-expand-xl" style={{ backgroundColor: "#333E6A" }}>
    <div className="container-fluid px-lg-5">
      <div className="d-flex align-items-center" style={{ paddingRight: "10px", paddingLeft: "10px" }}>
        <img src="lhi-logo.png" className="navbar-brand" alt="Lighthouse-logo" onClick={refreshPage}/>
      </div>
      <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
        <button className="navbar-toggler order-lg-2" style={{ borderColor: "light" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ borderColor: "light" }}></span>
        </button>
      </div>
      <div className="collapse navbar-collapse justify-content-end order-lg-1" id="navbarSupportedContent">
        <ul className="navbar-nav" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
          <li className="nav-item">
            <a href="#section1" className="nav-link" aria-current="page"  onClick={refreshPage}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#section2" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="#section4" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
</NavbarContainer>

  );
}

export default Navbar;
