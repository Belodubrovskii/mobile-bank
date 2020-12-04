import React from 'react';
import './Main.css';
import CardInfo from '../CardInfo/CardInfo';
import Currency from '../Currency/Currency';
import History from '../History/History';
import { currencySymbols } from '../../utils/constants';

function Main({ user, selectedValute, defaultValute, onSelect }) {

  return (
    <div className="main-page">
      {user &&
        <CardInfo
          user={user}
          selectedValute={selectedValute}
          defaultValute={defaultValute}
        />
      }
      <h2 className="main-page__title">Change currency</h2>
      <div className="main-page__container">
        {currencySymbols.map((valute) =>
          <Currency
            key={valute.code}
            code={valute.code}
            char={valute.char}
            selectedValute={selectedValute}
            onSelect={onSelect}
          />
        )}
      </div>
      <History
        transactions={user.transaction_history}
        selectedValute={selectedValute}
        defaultValute={defaultValute}
      />
    </div>
  );
}

export default Main;
