import React from "react";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import styles from "./modal-content-contacts.module.css";

type Props = {
 event: () => void;
};

const ModalContentContacts = (props: Props) => {
 return (
  <div>
   <h3>Hey, you can reach me with</h3>
   <div className={styles["Modal-contacts"]}>
    <a
     href="https://www.linkedin.com/in/muhamad-wildan-n/"
     target="_blank"
     title="Visit my linkedin"
     className={styles["linkedin"]}
    >
     <SiLinkedin color="black" fontSize={50} />
     <div>Linkedin</div>
    </a>
    <div className={styles["divider"]} />
    <div
     title="Send me email"
     onClick={props.event}
     className={styles["email"]}
    >
     <MdEmail color="black" fontSize={50} />
     <div>Email</div>
    </div>
   </div>
  </div>
 );
};

export default ModalContentContacts;
