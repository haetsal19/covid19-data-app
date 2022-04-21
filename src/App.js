import React from 'react';
import Home from './routes/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import './App.css';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <nav className='navbar'>
        <h1>COVID-19 Public Data Service</h1>
        <ul className='navbar__menu'>
          <li><a>발생동향</a></li>
          <li><a>뉴스&amp;이슈</a></li>
          <li><a>홍보자료&amp;FAQ</a></li>
          <li><a>피해지원정책</a></li>
          <li><a>공지사항</a></li>
          <li><a>코로나19검사&amp;재택치료&amp;치료제</a></li>
        </ul>
      </nav>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;