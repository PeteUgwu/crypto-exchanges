/* eslint-disable camelcase */
import React from 'react';
import { useLocation } from 'react-router';
import './Details.css';

const Details = () => {
  const location = useLocation();
  const {
    // eslint-disable-next-line camelcase, max-len
    image, name, country, url, year_established, trade_volume_24h_btc_normalized, trust_score, has_trading_incentive,
  } = location.state;
  return (
    <div className="details-container">
      <div className="exchange-image-name">
        <img src={image} alt={name} />
        <h3>
          {name}
          Details
        </h3>
      </div>
      <div className="container">
        <p>
          <span>Country</span>
          <span>{country}</span>
        </p>
        <p>
          <span>Website Url</span>
          <span>{url}</span>
        </p>
        <p>
          <span>Year Established</span>
          <span>{year_established}</span>
        </p>
        <p>
          <span>BTC Daily Trading Volume </span>
          <span>{trade_volume_24h_btc_normalized}</span>
        </p>
        <p>
          <span>Trust Score Value</span>
          <span>{trust_score}</span>
        </p>
        <p>
          <span>Has trading incentives </span>
          <span>{has_trading_incentive ? 'True' : 'False'}</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
