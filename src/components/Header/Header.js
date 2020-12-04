import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './Header.css';

function Header() {

  const location = useLocation().pathname
  let title;
  let isLinkVisible = false;

  if (location === "/") {
    title = 'Главная';
  } else {
    title = 'Мои карты';
    isLinkVisible = true;
  }

  return (
    <header className="header">
      { isLinkVisible && <Link to="/" className="header__link"/>}
      <p className="header__location">{title}</p>
    </header>
  );
}

export default Header;
