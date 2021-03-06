import { SingInButton } from '../SignInButton';

import style from './styles.module.scss';

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ed.news"/>

        <nav>
          <a className={style.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  )
}