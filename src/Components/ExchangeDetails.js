import React from 'react'
import "./ExchangeDetails.css";
import "../Pages/Home.css";
import { BsBoxArrowRight } from 'react-icons/bs';

const ExchangeDetails = ({exchange, showDetails}) => {
    const {
        id, name, image, trust_score_rank,
    } = exchange;

  return (
    <>
        <div className="exchange-home-section">
        <div className='details-btn'>
        <button onClick={() => showDetails(id)}> <BsBoxArrowRight style={{ background: '#CF4278', fontSize: '16px', }}/></button>
        </div>
          <img src={image} alt={name} />
          <div className='home-exchange-details'>
          <div className='exchange-name' >{name}</div>
          <div className='trust-score-rank' >{trust_score_rank}</div>
          </div>
        </div>
    </>
  )
}

export default ExchangeDetails