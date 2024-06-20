import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "./icon-button.module.css";

type Props = {
 icon: StaticImageData;
 text: string;
 event?: () => void;
};

const IconButton = (props: Props) => {
 return (
  <div className={styles["icon-button-container"]} onClick={props.event} title={props.text}>
   <div className={styles["ui-icon-container"]}>
    <Image src={props.icon} alt="my-computer" width={32} height={32} />
    <div>{props.text}</div>
   </div>
  </div>
 );
};

export default IconButton;
