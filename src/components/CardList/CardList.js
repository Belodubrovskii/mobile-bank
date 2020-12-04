import React from 'react';
import './CardList.css';
import CardType from '../CardType/CardType';

function CardList({ users, currentUser, onSelect }) {

  return (
    <section className="card-list">
      {users.map((user) =>
        <CardType
          user={user}
          key={user.card_number}
          currentUser={currentUser}
          onSelect={onSelect}
        />
      )}
    </section>
  );
}

export default CardList;
