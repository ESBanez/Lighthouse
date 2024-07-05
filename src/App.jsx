import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import LighthousePart from './Components/LighthousePart';
import Rapid2 from './Components/Rapid2';
import Btsolve2 from './Components/Btsolve2';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LighthousePart />} />
        <Route path="/rapid" element={<Rapid2 />} />
        <Route path="/bts" element={<Btsolve2 />} />
      </Routes>
    </Router>
  );
};


export default App;
