import { ModalWindow } from '../../Components/ModalWindow/ModalWindow';

import style from './MainPage.module.css';

export default function MainPage() {
  return (
    <div className={style.container}>
      <ModalWindow />
    </div>
  )
}
