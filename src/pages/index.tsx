import Head from 'next/head';

import styles from '../styles/global.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ed.news</title>
      </Head>
      <h1 className={styles.title} >Hello World</h1>
    </>
  )
}
