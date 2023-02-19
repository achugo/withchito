/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WITHCHITO</title>
        <meta name="description" content="WITHCHITO" />
        {/* <meta
          name="google-site-verification"
          content="7pRik2N4obUYnYqNdpRN9_E0KHftPIMZoehlM6S_BNE"
        /> */}
        <link rel="icon" href="/favicon.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.maindiv}>
        <div className={styles.line}>
          <img src="/logo.png" alt="With Chito" />
          {/* <div className={styles.animateline}></div> */}
        </div>
      </div>

      <div className={styles.chitoName}>CHITO O.</div>
      <footer className={styles.footer}>
        <span className={styles.logo}>© 2022 WITHCHITO.</span>
      </footer>
    </div>
  );
}
