import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import About from './screens/About/About';
import PortPage from './screens/Ports/PortPage';

function App() {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/port/:portName" element={<PortPage />} />
                </Routes>
            </BrowserRouter>
    </div>
    
  );
}

export default App;