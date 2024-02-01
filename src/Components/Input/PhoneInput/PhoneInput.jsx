import { useState, useRef } from 'react';

import { formatPhoneNumber } from '../../Helper/FormatPhoneHelper';

import style from './PhoneInput.module.css';

export const PhoneInput = ({ phoneIsValid, setPhoneIsValid }) => {
  const [phone, setPhone] = useState('');
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const inputPhoneRef = useRef(null);

  const handleChange = (event) => {
    inputPhoneRef.current = formatPhoneNumber(event.target.value);
  
    setPhone(inputPhoneRef.current);

    if (inputPhoneRef.current.length === 16) {
      setPhoneIsValid(true);
    } else {
      setPhoneIsValid(false);
    }
  };

  const handleKeyDown = (event) => {
      const phone = inputPhoneRef.current;

      if (event.key === 'Backspace') {
        if (phone) {
          if (phone[phone.length - 1] === ' ') {
            inputPhoneRef.current = inputPhoneRef.current.slice(0, inputPhoneRef.current.length - 1);
            setPhone(inputPhoneRef.current);
          }
        }
      }
  };

  return (
    <>
      <input 
        className={`
          ${!isPhoneClicked ? style.input : ''} 
          ${isPhoneClicked && !phoneIsValid ?  style.inputNotCorrect : ''} 
          ${isPhoneClicked && phoneIsValid ?  style.inputCorrect : ''} 
        `}
        type='text' 
        placeholder='+7 999 414 64 14'
        value={phone} 
        onChange={handleChange}
        onBlur={() => setIsPhoneClicked(true)}
        onKeyDown={handleKeyDown}
      />
    </>
  )
}

