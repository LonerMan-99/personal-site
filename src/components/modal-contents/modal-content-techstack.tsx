import React from "react";
import {
 WEBSITE_TECHSTACK_JSON,
 MOBILE_TECHSTACK_JSON,
 OTHER_TECHSTACK_JSON,
} from "@/constants/techstack-constant";

import styles from "./modal-content-techstack.module.css";

type Props = {};

const ModalContentTechstack = (props: Props) => {
 return (
  <div className={styles["techstack"]}>
   <h3>Tech that i can use</h3>

   <div className={styles["techstack-field"]}>
    <fieldset className={styles["field"]}>
     <legend>For Website</legend>
     {WEBSITE_TECHSTACK_JSON.map((item, index) => (
      <li key={index}>
       <item.icon /> {item.name}
      </li>
     ))}
    </fieldset>

    <fieldset className={styles["field"]}>
     <legend>For Mobile</legend>
     {MOBILE_TECHSTACK_JSON.map((item, index) => (
      <li key={index}>
       <item.icon /> {item.name}
      </li>
     ))}
    </fieldset>

    <fieldset className={styles["field"]}>
     <legend>Other Tech</legend>
     {OTHER_TECHSTACK_JSON.map((item, index) => (
      <li key={index}>
       <item.icon /> {item.name}
      </li>
     ))}
    </fieldset>
   </div>
  </div>
 );
};

export default ModalContentTechstack;
