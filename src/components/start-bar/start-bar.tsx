"use client";

import React from "react";
import styles from "@/components/start-bar/start-bar.module.css";
import Image from "next/image";
import startIcon from "@/assets/start-button.png";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { getCurrentTime } from "@/utils/time.util";

type Props = {};

const StartBar = (props: Props) => {
 const currentTime: string = getCurrentTime();

 return (
  <div className={styles["start-bar"]}>
   <div className={styles["start-bar-windows"]}>
    <button>
     <Image src={startIcon} alt="start" />
    </button>

    <div className={styles["created-by"]}>Created by Wildan</div>
   </div>

   <div className={styles["contacts"]}>
    <div className={styles["contacts-icon"]}>
     <a
      href="https://www.linkedin.com/in/muhamad-wildan-n/"
      title="Visit Linkedin"
      target="_blank"
     >
      <SiLinkedin color="blue" />
     </a>

     <a
      href="https://github.com/LonerMan-99?tab=repositories"
      title="Visit Github"
      target="_blank"
     >
      <FaGithubSquare color="black" />
     </a>
    </div>

    <div className={styles["clock"]}>{currentTime}</div>
   </div>
  </div>
 );
};

export default StartBar;
