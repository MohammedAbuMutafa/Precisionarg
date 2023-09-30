// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/dashboard';
import Session from './pages/sessions';
import Graph from './pages/graphs';
import Main_images from './pages/main_images';
import Managment from './pages/Managment';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes> {/* Updated from Switch to Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/sessions" element={<Session />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/main_images" element={<Main_images />} />
            <Route path="/Managment" element={<Managment />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
