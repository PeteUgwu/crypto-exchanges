import React from 'react'

const ExchangeDetails = ({exchange, showDetails}) => {
    const {
        id, name, image, trust_score_rank,
    } = exchange;

  return (
    <>
        <div className="exchange-image-section">
          <img src={image} alt={name} />
          <div>{name}</div>
          <div>{trust_score_rank}</div>
          <button type="button" onClick={() => showDetails(id)}>Click</button>
        </div>
    </>
  )
}

export default ExchangeDetails