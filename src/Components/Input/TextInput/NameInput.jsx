import { useState } from 'react';

import style from './NameInput.module.css';

export function NameInput({ textIsValid, setTextIsValid }) {
  const [name, setName] = useState('');
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const regExp = /^([^0-9$%]*)$/;

    if (regExp.test(inputValue)) {
      if (inputValue === '' || inputValue.length < 2) {
        setTextIsValid(false);
      } else {
        setTextIsValid(true);
      }
  
      setName(inputValue);
    }
  };

  return (
    <>
      <input
        className={`
          ${!isInputClicked ? style.input : ''} 
          ${isInputClicked && !textIsValid ?  style.inputNotCorrect : ''} 
          ${isInputClicked && textIsValid ?  style.inputCorrect : ''} 
        `}
        type='text'
        placeholder='Как к вам обращаться?'
        value={name}
        onChange={handleChange}
        onBlur={() => setIsInputClicked(true)}
      />
    </>
  )
}
