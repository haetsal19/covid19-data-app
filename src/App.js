import React from 'react';
import Map from './routes/map';
import Home from './routes/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;