import Link from "next/link";
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import styles from "@/styles/modules/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} navbar-expand-lg`}>
      <div className={styles.linkContainer}>
        <Link href="/" aria-label="Home" className="navbar-brand">
          <Icon path={mdiHome} size={1} className="mr-2" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;