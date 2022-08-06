import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';


function Item(props) {
  return (
    <div className={styles.item} onClick={props.onClick}>
        <Image src={props.imgSource} alt={props.title}/>
        <p>{props.title}</p>
    </div>
  )
}

export default Item