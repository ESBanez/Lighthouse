import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Team from "./Pages/Team"; // Import Team page
import Interns from "./Pages/Interns"; // Import Team page
import Leaders from "./Pages/Leaders"; // Import Leaders page
import Blog from './Pages/Blog';
import LighthousePart from './Components/LighthousePart';
import Rapid2 from './Components/Rapid2';
import Btsolve2 from './Components/Btsolve2';
import FooterKen from "./Components/FooterKen";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LighthousePart />} />
        <Route path="/rapid" element={<Rapid2 />} />
        <Route path="/bts" element={<Btsolve2 />} />
        <Route path="/contact" element={<FooterKen />} />
        <Route path="/blog" element={<Blog />} />       {/* ✅ Team Page */}
        <Route path="/team" element={<Team />} />       {/* ✅ Team Page */}
        <Route path="/leaders" element={<Leaders />} /> {/* ✅ Leaders Page */}
        <Route path="/interns" element={<Interns />} /> {/* ✅ Interns Page */}
      </Routes>
    </Router>
  );
};

export default App;
