import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import {useRouter} from "next/router";

function ProjectItem(props) {
  const dataItem = props.item;
  const router = useRouter();
  return (
    <div className={styles.project} onClick={() => router.push(`/projects/detail/${dataItem.id}`)}>
      <div>
        <Image src={dataItem.srcThumbnail} width={'250px'} height={'125px'}/>
      </div>
      <h6>{dataItem.title}</h6>
    </div>
  );
}

export default ProjectItem;
