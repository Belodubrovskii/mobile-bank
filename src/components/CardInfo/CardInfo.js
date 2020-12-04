import { Link } from 'react-router-dom';
import React from 'react';
import './CardInfo.css';
import Box from '../Box/Box';
import { currencySymbols, paymentLogoList, exchange } from '../../utils/constants';

function CardInfo({ user, selectedValute, defaultValute }) {

  const img = paymentLogoList.find((item) => item.name === user.type).img;
  const symbol = currencySymbols.find((item) => item.code === selectedValute.code);
  const balance = exchange(user.balance, defaultValute.value, selectedValute.value);

  return (
    <Link to="/cards" className="card">
      <Box style={{'marginBottom': '20px'}}>
        <img src={img} alt="payment logo" className="card__payment-logo"/>
        <p className="card__number">{user.card_number}</p>
      </Box>
      <Box style={{'marginBottom': '20px'}}>
        <div className="card__profile-img" />
        <p className="card__user-name">{user.cardholder_name}</p>
        <Box column style={{'marginLeft': 'auto'}}>
          <p className="card__date-label">VALID THRU</p>
          <p className="card__date">{user.valid}</p>
        </Box>
      </Box>
      <Box>
        <p className="card__current-currency">{symbol.char}{balance.toLocaleString()}</p>
        <Box column style={{'marginLeft': 'auto'}}>
          <p className="card__balance-label">Your balance</p>
          <p className="card__balance">${user.balance.toLocaleString().replace(/,/, '.')}</p>
        </Box>
      </Box>
    </Link>
  );
}

export default CardInfo;
