import { ModalWindow } from '../../Components/ModalWindow/ModalWindow';

import style from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={style.container}>
      <ModalWindow />
    </div>
  )
}
