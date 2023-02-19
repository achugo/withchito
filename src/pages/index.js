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
      </Head>

      <div className={styles.maindiv}>
        
        <div className={styles.line}>
          <Image src="/logo.png" alt="With Chito" width={800} height={800} />
          {/* <div className={styles.animateline}></div> */}
        </div>
      </div>

      <div className="chito-name">CHITO 0.</div>
      <footer className={styles.footer}> 
        <span className={styles.logo}>© 2022 WITHCHITO.</span>
      </footer>
    </div>
  );
}
