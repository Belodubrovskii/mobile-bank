import React from 'react';
import './History.css';
import Transaction from '../Transaction/Transaction';

function History({ transactions, selectedValute, defaultValute }) {

  return (
    <div className="history">
      <p className="history__title">History</p>
      <div className="history__container">
        {transactions.map((transaction, index) => <Transaction info={transaction} key={index} selectedValute={selectedValute} defaultValute={defaultValute}/>)}
      </div>
    </div>
  );
}

export default History;
