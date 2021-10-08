import React from 'react';
import './button.css';

function Button({ value, icon, action }) {

  return (
    <button className={value ? 'ui4-button-value' : 'ui4-button'} onClick={() => action()}>
      {value ? value : ''}{icon ? icon : ''}
    </button>
  );
}

export default Button;