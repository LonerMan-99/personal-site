import Image from "next/image";
import React from "react";
import myPhoto from "@/assets/me.jpeg";

import styles from "./modal-content-about-me.module.css";

type Props = {};

const ModalContentAboutMe = (props: Props) => {
 return (
  <div className={styles["about-me"]}>
   <div>
    <Image
     src={myPhoto}
     alt="wildan"
     width={215}
     height={230}
     objectFit="cover"
    />
   </div>
   <div>
    <h3 className={styles["about-me-title"]}>INTRODUCTION</h3>
    <div className={styles["about-me-description"]}>
     I am a 24 years old frontend developer website & mobile that have more than
     with 2 years experienced in digital banking industry who has a high passion
     and enthusiasm for the world of all fields related to software development,
     with severalabilities that I have, namely very understanding of HTML and
     CSS (able to change design into code), javascript, Typescript, several
     frameworks such as React Js, Redux toolkit, Ioniq, React Native, Next Js,
     Tailwind CSS then for native android development I&apos;m used to using kotlin.
    </div>
    <div className={styles["about-me-skill"]}>
     <h4>Website Development</h4>
     <div className={styles["about-me-divider"]} />
     <h4>Mobile App Development</h4>
    </div>
   </div>
  </div>
 );
};

export default ModalContentAboutMe;
