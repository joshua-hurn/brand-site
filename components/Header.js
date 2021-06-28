import { useState } from "react";
import Link from "next/link";


export default function Header({ title }) {
  const [links, setLinks] = useState([
    "projects",
    "about"
  ]);

  return (
    <>
      <h1 className="title">{title}</h1>
      {links.map((link, index) => (
        <Link href={"/" + link} key={index}>
          <a>{link}</a>
        </Link>
      ))}
    </>
  )
}