import React from 'react';
import Home from './routes/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;