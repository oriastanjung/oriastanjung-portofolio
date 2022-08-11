import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
function ProjectItem(props) {
  const dataItem = props.item;
  return (
    <div className={styles.project}>
      <div>
        <Image src={dataItem.srcThumbnail} width={'250px'} height={'125px'}/>
      </div>
      <h6>{dataItem.title}</h6>
    </div>
  );
}

export default ProjectItem;
