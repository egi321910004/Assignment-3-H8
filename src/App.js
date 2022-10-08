import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";

/** Pages */
import Home from './pages/Home';
import About from './pages/About';
import SideBar from './components/SideBar';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';
import Organizations from './pages/Organizations';

const App = () => {
  return (
    <>
      <SideBar />
      <div className="content_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
