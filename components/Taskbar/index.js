import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import terminalIcon from "../../assets/terminal.png";
import aboutIcon from "../../assets/about.png";
import projectsIcon from "../../assets/projects.png";
import certificatesIcon from "../../assets/certificates.png";
import contactIcon from "../../assets/contact.png";
import {useRouter} from "next/router";


function Taskbar() {
    const router = useRouter();
    
  return (
    <div className="taskbar">
      <div className="item-taskbar" onClick={() => router.push('/about')}>
        <Image className="icon" src={aboutIcon} alt="about" />
      </div>
      <div className="item-taskbar" onClick={() => router.push('/projects')}>
        <Image className="icon" src={projectsIcon} alt="projects" />
      </div>
      <div className="item-taskbar" onClick={() => router.push('/certificates')}>
        <Image className="icon" src={certificatesIcon} alt="certif" />
      </div>
      <div className="item-taskbar" onClick={() => router.push('/contact')}>
        <Image className="icon" src={contactIcon} alt="contact" />
      </div>
      <div className="item-taskbar" onClick={() => router.push('/terminal')}>
        <Image className="icon" src={terminalIcon} alt="terminal" />
      </div>
    </div>
  );
}

export default Taskbar;
