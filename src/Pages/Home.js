import React from 'react'
import { useSelector } from 'react-redux';
import ExchangeDetails from '../Components/ExchangeDetails';

const Home = () => {
    const exchanges = useSelector((state) => state.Exchanges);
    const showDetails = (id) => {
       

    }
  return (
    <div>
        <div>
            <input type="text" value="text" placeholder="Search An Exchange" />
        </div>
        <div>
            {exchanges.map((exchange) => (
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