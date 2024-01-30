import { useState } from 'react';

import style from './TextInput.module.css';

export function TextInput({ textIsValid, setTextIsValid }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === '' || inputValue.length < 2) {
      setTextIsValid(false);
    } else {
      setTextIsValid(true);
    }

    setValue(inputValue);
  };

  return (
    <>
      <input
        className={textIsValid ? style.input : style.inputNotCorrect}
        type='text'
        placeholder='Как к вам обращаться?'
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
