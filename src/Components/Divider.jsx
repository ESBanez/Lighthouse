import React, { useEffect } from 'react';
import { Divider } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import "aos/dist/aos.css";  // Import AOS styles
import "../Sass/mydivider.css";
import AOS from 'aos';

// Initialize AOS
AOS.init();

const MyDivider = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Divider orientation="left" plain className='we-partnered-with' data-aos="fade-right">
        <div className="wepartneredtext" style={{ color: "#333e5b", display: "flex", justifyContent: "center", alignItems: "center"}}>
           We <p style={{ color: "#FEC804", margin: "0 1rem" }}>partnered</p> with <span style={{ marginLeft: "1rem" }}><FontAwesomeIcon icon={faTag} beat /></span>
        </div>
      </Divider>
    </>
  );
};

export default MyDivider;
