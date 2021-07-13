import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import style from './styles.module.scss';

export function SingInButton() {
  const [ session ] = useSession();

  return session ? (
    <button 
      type="button"
      className={style.signInButton}
      onClick={ () => signOut()}
    >
      <FaGithub color="#04d361"/>
      Edson Batista
      <FiX color="#737380"/>
    </button>
  ) : (
    <button
      type="button"
      className={style.signInButton}
      onClick={ () => signIn('github')}
    >
      <FaGithub color="#eba417"/>
      Sign in with Github
    </button>
  );
}