import Head from 'next/head';
import Navbar from './Navbar';
import Footer from "./Footer";
import styles from "@/styles/modules/layout.module.scss";

const Layout = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title} - Josh Hurn</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <Navbar />

        <main className={styles.content}>
          {children}
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Layout;