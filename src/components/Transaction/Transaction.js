import React from 'react';
import './Transaction.css';
import Box from '../Box/Box';
import logo from '../../images/dropbox.svg';
import { currencySymbols, exchange } from '../../utils/constants';

function Transaction({ info, selectedValute, defaultValute }) {

  const symbol = currencySymbols.find((item) => item.code === selectedValute.code).char;
  const amountInSelectedValute = exchange(info.amount, defaultValute.value, selectedValute.value).toLocaleString().replace(/,/, '.');

  return (
    <div className="transaction">
      <img src={logo} alt="logo" className="transaction__logo"/>
      <Box column style={{'alignItems': 'flex-start'}}>
        <p className="transaction__company">{info.title}</p>
        <p className="transaction__date">{info.date}</p>
      </Box>
      <Box column style={{'marginLeft': 'auto'}}>
          <p className="transaction__selected-valute-amount">
            <span style={{color: '#8C9AAE'}}>- {symbol}</span> {amountInSelectedValute}
          </p>
        <p className="transaction__amount">$ {Math.abs(info.amount).toFixed(2).toLocaleString().replace(/,/, '.')}</p>
      </Box>
    </div>
  );
}

export default Transaction;
