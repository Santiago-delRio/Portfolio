import Head from "next/head";
import styles from "./404.module.scss";
import Navbar from "../components/Navbar";
import PageLoadAnimation from "../components/PageLoadAnimation";

const Custom404 = () => {
  return (
    <main className={styles.notFound}>
      <Head>
        <title>Santiago del Río - Frontend Developer - Page not found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page load animation */}
      <PageLoadAnimation />
      <Navbar />
      <h1>404</h1>
      <h3>Page not found</h3>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/#home" className={styles.homeBtn}>
        Go home
      </a>
    </main>
  );
};

export default Custom404;
