import Link from "next/link";
import styles from "../styles/modules/navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} navbar-expand-lg`}>
            <div className={styles.linkContainer}>
                <Link href="/">
                    <a className="navbar-brand">
                        <FontAwesomeIcon icon={["fas", "home"]} className="mr-2" />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li> */}

                        <li className="nav-item">
                            <Link href="/projects">
                                <a className="nav-link">Projects</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar