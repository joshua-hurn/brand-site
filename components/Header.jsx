import { useState } from "react";
import Link from "next/link";
import styles from "../styles/modules/header.module.scss";

const Header = () => {
  const [links] = useState([
    "projects",
    "about"
  ]);

  return (
    <div className="header-wrapper d-flex flex-column align-items-center">
      <h1 className="title d-flex align-items-center mb-md-3">
        <img src="/assets/icons/bracket-curly-left.svg" width={30} height={60} className={styles.filterCurly}/>
        <span className="m-3">Josh Hurn</span>
        <img src="/assets/icons/bracket-curly-right.svg" width={30} height={60} className={styles.filterCurly}/>
      </h1>

      {links.map((link, index) => (
        <Link href={"/" + link} key={index}>
          <a className="text-white">{link}</a>
        </Link>
      ))}
    </div>
  )
}

export default Header;