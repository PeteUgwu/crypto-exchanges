import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { fetchExchanges } from './Redux/Exchange/Exchange';

// components
import Navbar from './Components/Navbar';

// pages
import Home from './Pages/Home';
import Details from './Pages/Details';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchExchanges());
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
