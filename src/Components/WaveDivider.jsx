import "../Sass/WaveDivider.css";


const WaveDivider = () => {
    return (
      <svg className="editorial" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" style={{width:"fit-content"}}>
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
        </defs>
        <g className="parallax1">
          <use xlinkHref="#gentle-wave" x="100" y="3" fill= "#5472CB"/>
        </g>
        <g className="parallax2">
          <use xlinkHref="#gentle-wave" x="50" y="0" fill= "#63bff1"/>
        </g>
        <g className="parallax3">
          <use xlinkHref="#gentle-wave" x="50" y="9" fill= "#02699F"/>
        </g>
        <g className="parallax4">
          <use xlinkHref="#gentle-wave" x="50" y="6" fill="white"/>
        </g>
      </svg>
    );
  };
  
  export default WaveDivider;
  