import React from 'react';
import './Box.css';

function Box({ column, children, style }) {
  return (
    <div className={`box ${column ? 'box_column' : ''}`} style={style}>
      {children}
    </div>
  );
}

export default Box;

