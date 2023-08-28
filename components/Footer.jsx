import Link from "next/link";
import styles from '@/styles/modules/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href={"https://github.com/joshua-hurn"} className={styles.logoLink}>
        <img src={"/assets/images/github-square.svg"} alt="github logo that links to my github profile" width={30} height={60} />
      </Link>

      <Link href={"https://www.linkedin.com/in/josh-hurn/"} className={styles.logoLink}>
        <img src={"/assets/images/linkedin.svg"} alt="linkedin logo that links to my linkedin profile" width={30} height={60} />
      </Link>
    </footer>
  )
}

export default Footer;