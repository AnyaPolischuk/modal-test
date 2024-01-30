import style from './Button.module.css';

export function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className={style.button}>{text}</button>
    </>
  )
}
