import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import PortPage from './screens/Ports/PortPage';
import FAQ from './screens/FAQ/FAQ';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/port/:portName" element={<PortPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
