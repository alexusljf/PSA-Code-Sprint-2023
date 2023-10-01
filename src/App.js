import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Use Routes instead of BrowserRouter
import Home from './screens/Home/Home';
import About from './screens/About/About';
import PortPage from './screens/Ports/PortPage';
import FAQ from './screens/FAQ/FAQ';
import Contact from './screens/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/port/:portName" element={<PortPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
