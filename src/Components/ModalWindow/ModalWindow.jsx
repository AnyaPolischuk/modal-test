import { useState, useEffect } from 'react';

import { Button } from '../Button/Button';
import { NameInput } from '../Input/NameInput/NameInput';
import { PhoneInput } from '../Input/PhoneInput/PhoneInput';

import successImg from '../../assets/images/img2.png';
import consultationImg from '../../assets/images/img1.png';
import closeBth from '../../assets/images/close-icon.png';

import style from './ModalWindow.module.css';

export const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [isSuccess, setIsSuccess] =  useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  const successHandle = () => {
    if (phoneIsValid && nameIsValid) {
      setIsSuccess(true);
    }
  }

  return (
    <>
      <div className={style.buttonWrapper}>
        <Button onClick={() => setIsOpen(true)} text='Получить консультацию' />
      </div>
      {isOpen &&  (
        <div className={style.backgroundClose} onClick={() => setIsOpen(false)}>
          <div className={`${isSuccess ? style.contentSuccess : style.content} `} onClick={(e) => e.stopPropagation()}>
            <div>
              <img className={`${isSuccess ? style.imgSuccess : style.img} `} src={isSuccess ? successImg : consultationImg} alt='consultation-img' />
            </div>
            <div className={`${isSuccess ? style.contentWrapperSuccess : style.contentWrapper}`}>
              <h2 className={`${isSuccess ? style.titleSuccess : style.title}`}>
                {isSuccess ? 'Ваша заявка принята!' 
                :
                'Будем рады ответить на ваши вопросы и помочь с выбором'
                }
              </h2>
              { isSuccess ? 
                <p className={style.successText}>Мы свяжемся с Вами в течение 5 минут.</p>
                : ''
              }
              {!isSuccess && (
                <>
                  <div className={style.inputWrapper}>
                    <NameInput textIsValid={nameIsValid} setTextIsValid={setNameIsValid} />
                    <PhoneInput phoneIsValid={phoneIsValid} setPhoneIsValid={setPhoneIsValid} />
                  </div>
                  <Button text='Получить консультацию' onClick={successHandle} />
                  <p className={style.info}>
                    Нажимая на кнопку вы соглашаетесь на 
                  </p>
                  <a className={style.link} href='/'>обработку персональных данных</a>
                </>
              )}
              {isSuccess && (
                <Button text='Вернуться на сайт' onClick={() => window.location.reload()} />
              )}
            </div>
            <button className={`${isSuccess ? style.closeBthSuccess : style.closeBtn} `} onClick={() => setIsOpen(false)}>
              <img src={closeBth} alt='closeIcon' className={style.closeBntImg} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
