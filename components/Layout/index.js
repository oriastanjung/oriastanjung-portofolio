import { useRouter } from "next/router";
import Taskbar from "../Taskbar";
import Navbar from "../Navbar";

import Footer from "../Footer";
import Head from "../Head";
import React, { useEffect } from "react";
function Layout(props) {
  const router = useRouter();
  const date = new Date();
  const hour = Number(date.getHours());
  const wallpaperBG = [
    "/bg-01.gif",
    "/bg-02.gif",
    "/bg-03.jpeg",
    "/bg-04.jpeg",
    "/bg-05.jpg",
    "/bg-06.png",
  ];

  let background;
  const chooseRandomBG = () => {
    if (hour >= 8 && hour < 10) {
      return (background = wallpaperBG[3]);
    } else if (hour >= 10 && hour < 14) {
      return (background = wallpaperBG[5]);
    } else if (hour >= 14 && hour < 17) {
      return (background = wallpaperBG[4]);
    } else if (hour >= 17 && hour < 19) {
      return (background = wallpaperBG[2]);
    } else if (hour >= 19 && hour <= 24) {
      return (background = wallpaperBG[1]);
    } else {
      return (background = wallpaperBG[0]);
    }
  };
  chooseRandomBG();
  useEffect(() => {
  }, []);
  return (
    <div
      className="background-img"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <Head></Head>
      <Navbar></Navbar>
      {props.children}

      <Taskbar></Taskbar>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
