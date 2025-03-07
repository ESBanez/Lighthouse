// import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import FooterKen from "../Components/FooterKen";
import { Alert } from "@mui/material";
// import { CircularProgress } from "@mui/material";

const Blog = () => {
//   const [countdown, setCountdown] = useState(30);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <br /><br /><br />
        <h1 className="text-3xl font-bold text-gray-800">Blog Under Maintenance</h1>
        <br /><br />
        <Alert severity="info" className="mt-4">
          We are working hard to bring you exciting content. Stay tuned!
        </Alert>
        <div className="mt-4 flex items-center gap-2">
        <br /><br />
          {/* <CircularProgress color="primary" size={24} />
          <p className="text-gray-700 font-semibold">
            Estimated time left: <span className="text-blue-500">{countdown}</span> sec
          </p> */}
        </div>
      </div>
      <br /><br /><br />
      <FooterKen />
    </>
  );
};

export default Blog;