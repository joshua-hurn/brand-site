import Link from "next/link";
import styles from '../styles/modules/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"https://github.com/joshua-hurn"}>
        <a className={styles.logoLink}>
          <img src={"/assets/images/github-square.svg"} width={30} height={60} />
        </a>
      </Link>

      <Link href={"https://www.linkedin.com/in/josh-hurn/"}>
        <a className={styles.logoLink}>
          <img src={"/assets/images/linkedin.svg"} width={30} height={60} />
        </a>
      </Link>
    </footer>
  )
}

export default Footer;