import React, { useState } from 'react';
import './Input.css';

function Input({ onFail, onSuccess }) {
  const [value, setValue] = useState('');
  const [enabled, setEnabled] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    e.preventDefault();
  }

  const onSubmit = (e) => {
    console.log({ value });
    setEnabled(false);
    if (enabled) {
      if (value !== 'toto') {
        onFail();
      } else {
        onSuccess();
      }
      setTimeout(() => setEnabled(true), 500);
    }
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h2>Prénom: </h2>
        </div>
        <input maxLength={4} value={value} onChange={handleChange} />
        <div className="button_cont" align="center">
          <a onClick={onSubmit} className="example_b" >TEST</a>
        </div>

      </form>
    </div>
  )
}

export default Input;
