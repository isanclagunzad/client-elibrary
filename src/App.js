import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Books from './pages/Books';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Navbar from './components/client/landing/Navbar';

const App = () => {
  const [nav, setNav] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <Router>
      {window.location.pathname !== '/account' && (
        <Navbar offset={offset} handleNav={handleNav} nav={nav} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;
