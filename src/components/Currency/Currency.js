import React from 'react';
import './Currency.css';

function Currency({ code, char, onSelect, selectedValute }) {

  let isActive = false;

  if (selectedValute.code === code) {
    isActive = true;
  }

  function handleChangeCurrency() {
    onSelect(code);
  }

  return (
    <button onClick={handleChangeCurrency} className={`currency ${isActive ? 'currency_active' : ''}`}>
      <p className="currency__char">{char}</p>
      <p className="currency__code">{code}</p>
    </button>
  );
}

export default Currency;
