import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <div className="logo" onClick={() => setCurrentPage('home')}>
        Depot Manager
      </div>
      <div className="header">
        <Link to="/"><button className='header-btm'>Home</button></Link>
        <Link to="/aboutUs"><button className='header-btm'>About</button></Link>
        <Link to="/contact"><button className='header-btm'>Contacts</button></Link>
        <Link to="/driver"><button className='header-btm'>Register</button></Link>
        <Link to="/dispatcher"><button className='header-btm'>Dispatcher</button></Link>
      </div>
    </header>
  );
};

export default Header;
