import { useState } from 'react';

import style from './NumberInput.module.css';

export const NumberInput = ({ numberIsValid, setNumberIsValid }) => {
  const [phone, setPhone] = useState('');

    const handleChange = (e) => {
      const formattedPhone = formatPhone(e.target.value);
      setPhone(formattedPhone);
    };
  
    const formatPhone = (value) => {
      const phoneNumber = value.replace(/[^\d]/g, '');
      const phoneNumberLength = phoneNumber.length;

      setNumberIsValid(false);

      if (phoneNumberLength < 3) {
        return `+7 ${phoneNumber}`
      }
  
      if (phoneNumberLength < 7) {
        console.log('меньше 7 символов')
        return `+7 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4)}`;
      } 
  
      if (phoneNumberLength < 9) {
        return `+7 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7)}`;
      } 

      if (phoneNumberLength === 11) {
        setNumberIsValid(true);
      }
      
      return `+7 ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(7, 9)} ${phoneNumber.slice(9, 11)}`;
    };

  return (
    <>
      <input 
        className={numberIsValid ? style.input : style.inputNotCorrect} 
        type='text' 
        placeholder='+7 999 414 64 14'
        value={phone} 
        onChange={handleChange}
      />
    </>
  )
}
