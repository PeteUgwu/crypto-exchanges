import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ExchangeDetails from '../Components/ExchangeDetails';
import { useNavigate } from 'react-router';
import "./Home.css";

const Home = () => {
    const navigate = useNavigate()

    const exchanges = useSelector((state) => state.Exchanges);
    const [ exchangeList, setExchangeList ] = useState([]);

    useEffect(() => {
        setExchangeList(exchanges)
    }, [exchanges])

    const handleSearch = (text) => {
        const filterExchanges = exchanges.filter((exc) => (
           exc.name.toLowerCase().includes(text.toLowerCase()) 
        ))
        setExchangeList(filterExchanges);
    }

    const showDetails = (id) => {
       const itemClick = exchanges.filter((exchange) => exchange.id === id) 
       navigate("/details", {state: itemClick[0]})

    }
  return (
    <div className='main-container'>
        <div className='search-field'>
            <input
              type="text"
              placeholder="Search An Exchange"
              onChange={(e) => handleSearch(e.target.value)}  
            />
        </div>
        <div className='exchange-container'>
            {exchangeList.map((exchange) => (
                <ExchangeDetails 
              key={exchange.id}
              exchange={exchange}
              showDetails={showDetails} 
            />
            ))}
        </div>
    </div>
  )
}

export default Home;