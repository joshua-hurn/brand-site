import styles from '../styles/modules/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy;{new Date().getFullYear()}  hurn.io
    </footer>
  )
}

export default Footer;