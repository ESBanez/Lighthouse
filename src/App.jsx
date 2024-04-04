import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from "./Components/Services.jsx";
import Home from "./Pages/Home";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* Nested routes */}
        <Route path="/" element={<Services />}>
          <Route path=":id" element={<Services />} />
        </Route>
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};


export default App;
