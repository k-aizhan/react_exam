import React from 'react';
import heroImage from '../../assets/hero-image.jpg'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
        <Router>
      <div className="hero-content">
        <h1>Добро пожаловать на наш сайт грузовых перевозок!</h1>
        <p>
        Мы предлагаем надежные, быстрые и экономичные решения для транспортировки грузов. Наша команда профессионалов готова помочь вам доставить ваш груз точно в срок и с максимальной сохранностью.
        </p>
          <div className="header">
          <Link to="/feedback"> <button className='dispatcher-btn' onClick={() => setCurrentPage('feedback')}>Get Started</button></Link>
          </div>
        </div>
        </Router>
      <img src={heroImage} alt="Hero" />
    </section>
  );
};

export default HeroSection;
