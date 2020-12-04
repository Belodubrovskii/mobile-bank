import React from 'react';
import './CardType.css';
import { paymentLogoList } from '../../utils/constants';

function CardType({ user, currentUser, onSelect }) {

  const logo = paymentLogoList.find((item) => user.type === item.name).img;
  let isSelectedCard = false;

  if (user.card_number === currentUser.card_number) {
    isSelectedCard = true;
  }

  function handleCardSelect() {
    onSelect(user);
  }

  return (
    <button onClick={handleCardSelect} className="card-btn">
      <img src={logo} alt="logo" className="card-btn__img"/>
      <p className="card-btn__number">{user.card_number}</p>
      {isSelectedCard && <div className="card-btn__select" />}
    </button>
  );
}

export default CardType;
