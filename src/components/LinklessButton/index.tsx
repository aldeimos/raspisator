import React from 'react';

import './index.scss';

interface LinklessButtonProps {
  children: React.ReactNode,
  handler(): void,
  text: string,
}

const LinklessButton: React.FC<LinklessButtonProps>= ({text, handler, children}) => {
  return (
    <button
      className="link-button"
      onClick={handler}
    >
      {children}
      {text}
    </button>
  )
};

export default LinklessButton;
