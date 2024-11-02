// Button.js
import React from 'react';
import './Button.css'

export const Button = ({ text, onClick, link }) => {
  const handleClick = () => {
    if (link) {
      // If a link is provided, navigate
      window.location.href = link; // For links
    } else if (onClick) {
      // If an onClick function is provided, call it
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className="button">
      {text}
    </button>
  );
};
