import React, { useState } from "react";
import { MdDownload } from "react-icons/md";
import styles from "./modal-content-cv.module.css";

type Props = {};

const ModalContentCv = (props: Props) => {
 const [pdfUrl, setPdfUrl] = useState("/pdf/cv.pdf");

 const handlePdfFileDownload = () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.download = "Muhamad Wildan Nugraha - Frontend Engineer.pdf";
  downloadLink.click();
 };

 return (
  <div style={{}}>
   <h3>PDF Document</h3>
   <div className={styles["Modal-cv-container"]}>
    <div className={styles["Modal-cv-preview"]}>
     <embed src={pdfUrl} width="100%" height="320px" type="application/pdf" />
    </div>
    <div
     style={{
      width: "fit-content",
      height: "fit-content",
     }}
    >
     <button
      onClick={handlePdfFileDownload}
      className={styles["Modal-cv-button"]}
     >
      <MdDownload color="black" />
      <div> Download CV</div>
     </button>
    </div>
   </div>
  </div>
 );
};

export default ModalContentCv;
