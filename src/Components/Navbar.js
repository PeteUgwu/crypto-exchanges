import React from 'react';
import { useNavigate } from 'react-router';
import './Navbar.css';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="home-btn">
        <button
          type="button"
          onClick={() => navigate('/')}
        >
          <span><MdArrowBackIosNew /></span>
          Home
        </button>
      </div>
      <div className="nav-title">
        <h1>Crypto Exchange</h1>
      </div>
      <div className="nav-icons">
        <span><HiOutlineMicrophone style={{ color: 'white', fontSize: '18px' }} /></span>
        <span><FiSettings style={{ color: 'white', fontSize: '18px' }} /></span>
      </div>
    </div>
  );
};

export default Navbar;
