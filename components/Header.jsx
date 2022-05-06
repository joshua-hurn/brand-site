import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/modules/header.module.scss";

const Header = ({ title }) => {
  const [links] = useState([
    "projects",
    "about"
  ]);

  return (
    <>
      <h1 className="title d-flex align-items-center">
        <Image src="/assets/icons/bracket-curly-left.svg" width={30} height={60} className={styles.filterCurly}/>
        <span className="m-3">Josh Hurn</span>
        <Image src="/assets/icons/bracket-curly-right.svg" width={30} height={60} className={styles.filterCurly}/>
      </h1>

      {links.map((link, index) => (
        <Link href={"/" + link} key={index}>
          <a className="text-white">{link}</a>
        </Link>
      ))}
    </>
  )
}

export default Header;