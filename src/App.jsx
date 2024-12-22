import React, { useState } from 'react';
import Header from './UI/components/Header.jsx';
import HeroSection from './UI/components/HeroSection.jsx';
import Features from './UI/components/Features.jsx';
import Testimonials from './UI/components/Testimonials.jsx';
import Footer from './UI/components/Footer.jsx';
import AboutUs from './UI/pages/AboutUs.jsx';
import Contact from './UI/pages/Contact.jsx';
import Feedback from './UI/components/Feedback.jsx';
import Dispatcher from './UI/pages/accountDashboard/Dispatcher.jsx';
import Driver from './UI/pages/accountDashboard/Driver.jsx';
import './UI/styles/pages.css';
import './UI/styles/components.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <Features />
            <Testimonials />
            <Feedback />
          </>
        );
      case 'aboutUs':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      case 'dispatcher':
        return <Dispatcher />;
      case 'driver':
        return <Driver />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
