import React from 'react'
import Image from 'next/image'
import styles from "./index.module.css";

function Skill(props) {
  return (
    <div className={styles.skill}>
        <Image src={props.srcSkillImg} width={'50px'} height={'50px'}/>
        <h6>{props.title}</h6>
        <p>{props.level}</p>
    </div>

  )
}

export default Skill