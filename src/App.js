import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/Navigate/About';
import Contact from './components/Navigate/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" />
    </Router>
  );
}

export default App;
