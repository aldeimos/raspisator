import React, {SyntheticEvent} from 'react';

import './index.scss';

interface InputProps {
  id: string,
  value: string,
  label?: string,
  type: string,
  name: string,
  placeholder?: string,
  handler(e:SyntheticEvent): void,
}

const Input: React.FC<InputProps> = ({ id, label, type = 'text', name, value, placeholder, handler }) => {
  return (
    <div className="form-field">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(e) => handler(e)}
      />
    </div>
  )
};

export default Input;
