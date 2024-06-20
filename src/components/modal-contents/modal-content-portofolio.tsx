import React from "react";
import Web from "@/assets/web.png";
import Image from "next/image";
import styles from "./modal-content-portofolio.module.css";

type Props = {};

const ModalContentPortofolio = (props: Props) => {
 return (
  <div>
   <h3>Working Projects</h3>

   <div className={styles["Portofolio-container"]}>
    <a
     href="https://amarbank.co.id/retail"
     title="Amar Bank Retail"
     target="_blank"
     className={styles["Portofolio"]}
    >
     <Image src={Web} alt="website" />
     <div>Amar Bank Retail</div>
    </a>

    <a
     href="https://embedded.amarbank.co.id"
     title="Amar Bank Retail"
     target="_blank"
     className={styles["Portofolio"]}
    >
     <Image src={Web} alt="website" />
     <div>Amar Bank Embedded Banking</div>
    </a>

    <a
     href="https://play.google.com/store/apps/details?id=com.senyumkubank.rekeningonline&referrer=utm_source%3Dwebsite%2Bretail%26utm_medium%3Dwebsite%2Bheader%26utm_term%3Dinstall%26utm_content%3Ddownload%2Bamar%2Bbank%26utm_campaign%3Dwebsite%2Bheader%26anid%3Dadmob"
     title="Amar Bank Retail"
     target="_blank"
     className={styles["Portofolio"]}
    >
     <Image src={Web} alt="website" />
     <div>Amar Bank Android Digital Banking</div>
    </a>
   </div>
  </div>
 );
};

export default ModalContentPortofolio;
