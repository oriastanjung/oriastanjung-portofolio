import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import closeButtonIcon from "../../assets/close-window.png";
import minimizeButtonIcon from "../../assets/minimize-window.png";
import expandButtonIcon from "../../assets/expand-window.png";
import shrinkButtonIcon from "../../assets/shrink-window.png";

function ApplicationWindow(props) {
  const [classNameMaximize, setClassNameMaximize] = useState([styles.window]);
  const [isMaximize, setIsMaximize] = useState(false);

  const maximizeHandler = () => {
    if (isMaximize === false) {
      setIsMaximize(true);
      setClassNameMaximize([styles.maximize, ...classNameMaximize]);
    } else {
      setClassNameMaximize([styles.window]);
      setIsMaximize(false);
    }
  };

  return (
    <div className={[...classNameMaximize].join(" ")}>
      <div className={styles["window-bar"]}>
        <div className={styles["window-button"]}>
          <Link href={"/"}>
            <div className={`${styles.circle} ${styles.red}`}>
              <Image src={closeButtonIcon} />
            </div>
          </Link>
          <Link href={"/"}>
            <div className={`${styles.circle} ${styles.yellow}`}>
              <Image src={minimizeButtonIcon} />
            </div>
          </Link>
          <div
            className={`${styles.circle} ${styles.green}`}
            onClick={maximizeHandler}
          >
            {isMaximize ? (
              <Image src={shrinkButtonIcon} />
            ) : (
              <Image src={expandButtonIcon} />
            )}
          </div>
        </div>
        <div className={styles['window-title']}>
            <Image src={props.iconWindow} />
            <h6>
                {props.windowTitle}
            </h6>
        </div>
        <div>{' '}</div>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default ApplicationWindow;
