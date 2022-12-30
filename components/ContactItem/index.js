import Image from "next/image";
import React from "react";
import styles from "./index.module.css";

function ContactItem(props) {
  return (
    <div
      className={`d-flex flex-row justify-content-between ${styles["contact-item"]}`}
    >
      <div
        className={`d-flex flex-row gap-3 align-items-center ${styles["contact-item"]}`}
      >
        <Image src={props.img} />
        <p className="text-white fs-5" style={{fontWeight : "200"}}>{props.desc}</p>
      </div>
      <div className="d-flex justify-content-end">
        <a target={"_blank"} href={props.href} rel="noopener noreferrer" className="text-white fs-6">{props.value}</a>
      </div>
    </div>
  );
}

export default ContactItem;
