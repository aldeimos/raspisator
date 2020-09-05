import React from 'react';

import './index.scss'

interface ButtonProps {
  handler(): void,
  text: string,
  stretched?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, stretched = false, handler = () => ('')  }) => {
  return (
    <button
      className={`btn${stretched ? ' btn--stretched' : ''}`}
      onClick={handler}
    >
      {text}
    </button>
  )
};

export default Button;
