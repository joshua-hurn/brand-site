import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/modules/header.module.scss";

const Header = () => {
  const [links] = useState([
    "projects",
    "about"
  ]);

  return (
    <div className="header-wrapper d-flex flex-column align-items-center">
      <h1 className="title d-flex align-items-center mb-md-3">
        <img src="/assets/icons/bracket-curly-left.svg" alt="curly bracket left for aesthetic only" width={30} height={60} className={styles.filterCurly} />
        <span className="mx-3">Josh Hurn</span>
        <img src="/assets/icons/bracket-curly-right.svg" alt="curly bracket right for aesthetic only" width={30} height={60} className={styles.filterCurly} />
      </h1>

      {links.map((link, index) => (
        <Link href={"/" + link} key={index} aria-label={link} className="text-white">
          {link}
        </Link>
      ))}
    </div>
  )
}

export default Header;
// C-66829740