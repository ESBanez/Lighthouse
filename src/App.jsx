import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* Nested routes */}

        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
