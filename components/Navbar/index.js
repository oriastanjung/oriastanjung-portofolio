import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import searchIcon from "../../assets/searchIcon.png";
import Router, {useRouter} from "next/router";
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
        <div className={styles["nav-item-right"]} style={{cursor:"pointer"}}>
          <h1 onClick={()=> Router.push('/')}>O. Riastanjung</h1>
          <Image src={searchIcon}></Image>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
