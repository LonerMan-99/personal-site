import React, { useState } from "react";
import styles from "./window-modal.module.css";

type Props = {
 isShown: boolean;
 closeModal: () => void;
 title: string;
 children: any;
};

function WindowModal(props: Props) {
 const [isFullsize, setIsFullsize] = useState(false);
 return (
  props.isShown && (
   <div className={styles["window-modal-background"]}>
    <div
     className={`${styles["window-modal"]} window`}
     style={{
      maxWidth: isFullsize ? "100%" : "600px",
      height: isFullsize ? "100%" : "400px",
     }}
    >
     <div className="title-bar">
      <div className="title-bar-text">{props.title}</div>
      <div className="title-bar-controls">
       <button
        aria-label="Minimize"
        onClick={() => setIsFullsize(false)}
       ></button>
       <button
        aria-label="Maximize"
        onClick={() => setIsFullsize(true)}
       ></button>
       <button
        aria-label="Close"
        onClick={() => {
         setIsFullsize(false);
         props.closeModal();
        }}
       ></button>
      </div>
     </div>
     <div className="window-body">{props.children}</div>
    </div>
   </div>
  )
 );
}

export default WindowModal;
