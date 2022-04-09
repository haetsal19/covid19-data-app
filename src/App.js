import React from 'react';
import Home from './routes/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <h1>COVID-19 Public Data Service</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;