import { useState, useEffect } from 'react';

import { Button } from '../Button/Button';
import { TextInput } from '../Input/TextInput/TextInput';
import { NumberInput } from '../Input/NumberInput/NumberInput';

import successImg from '../../assets/images/img2.png';
import consultationImg from '../../assets/images/img1.png';
import closeBth from '../../assets/images/close-icon.png';

import style from './ModalWindow.module.css';


export const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(true);
  const [textIsValid, setTextIsValid] = useState(true);
  const [isSuccess, setIsSuccess] =  useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const successHandle = () => {
    if (numberIsValid && textIsValid) {
      setIsSuccess(true);
    }
  }

  return (
    <>
      <div className={style.buttonWrapper}>
        <Button onClick={() => setIsOpen(true)} text='Получить консультацию' />
      </div>
      {isOpen &&  (
        <div className={style.backgroundClose} onClick={handleClose}>
          <div className={style.content} onClick={(e) => e.stopPropagation()}>
            <div>
              <img className={style.img} src={isSuccess ? successImg : consultationImg} alt='consultation-img'></img>
            </div>
            <div className={style.contentWrapper}>
              <h2 className={style.title}>
                {isSuccess ? 'Ваша заявка принята!' 
                :
                'Будем рады ответить на ваши вопросы и помочь с выбором'
                }
              </h2>
              {isSuccess ? 
                <p className={style.successText}>Мы свяжемся с Вами в течение 5 минут.</p>
                : ''
              }
              {!isSuccess && (
                <>
                  <div className={style.inputWrapper}>
                    <TextInput textIsValid={textIsValid} setTextIsValid={setTextIsValid} />
                    <NumberInput numberIsValid={numberIsValid} setNumberIsValid={setNumberIsValid} />
                  </div>
                  <Button text='Получить консультацию' onClick={successHandle} />
                  <p className={style.info}>
                    Нажимая на кнопку вы соглашаетесь на 
                  </p>
                  <a className={style.link} href=''>обработку персональных данных</a>
                </>
              )}
              {isSuccess && (
                <Button text='Вернуться на сайт' onClick={() => window.location.reload()} />
              )}
            </div>
            <img src={closeBth} alt='closeIcon' className={style.closeBnt} onClick={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};
