import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import searchIcon from "../../assets/searchIcon.png";
import githubIcon from "../../assets/github-icon.png";
import { useRouter } from "next/router";
import { useState } from "react";
function Navbar() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const tick = () => {
    setDate(new Date());
  };
  setInterval(() => tick(), 1000);
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles["nav-item-left"]}>
          <div
            className={`${styles["icon-logo"]}`}
            style={{ cursor: "pointer" }}
          >
            <Link href={"https://github.com/oriastanjung"}>
              <Image src={githubIcon} />
            </Link>
          </div>
          <div className={styles["nav-link"]}>
            <h4>Hello, World!</h4>
            <ul>
              <li>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href={"/projects"}>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href={"/certificates"}>
                  <a>Certificates</a>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["nav-item-right"]} style={{ cursor: "pointer" }}>
          <p>{date.toLocaleTimeString()}</p>
          <Link href={"/"}>
            <h1>O. Riastanjung</h1>
          </Link>
          <Image src={searchIcon}></Image>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
