import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import searchIcon from "../../assets/searchIcon.png";
function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles["nav-item-left"]}>
          <div className={`${styles["icon-logo"]}`}></div>
          <div className={styles["nav-link"]}>
            <h4>Hello, World!</h4>
            <ul>
              <li>
                <Link href={"/"}>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a>Certificates</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["nav-item-right"]}>
          <h1>O. Riastanjung</h1>
          <Image src={searchIcon}></Image>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
