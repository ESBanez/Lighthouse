import { Divider } from 'antd';
import "../Sass/mydivider.css"

const MyDivider = () => (
  <>
    <Divider orientation="left" plain className='we-partnered-with'>
      <div style={{ color: "#333e5b", fontSize: "4rem", display: "flex", justifyContent: "center", alignItems: "center"}}>
         We <p style={{ color: "#FEC804", margin: "0 1rem" }}> partnered  </p>with.
      </div>
    </Divider>
  </>
);

export default MyDivider;
