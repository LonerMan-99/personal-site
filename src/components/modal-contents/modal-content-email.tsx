import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./modal-content-email.module.css";
import Image from "next/image";
import loading from "@/assets/loading.gif";

type Props = {};

type requestEmail = {
 from_name: string;
 from_email: string;
 to_name: string;
 message: string;
};

const ModalContentEmail = (props: Props) => {
 const [formData, setFormData] = useState<requestEmail>({
  from_name: "",
  from_email: "",
  to_name: "Wildan",
  message: "",
 });
 const [isLoading, setIsLoading] = useState<boolean>(false);

 const handleChange = (e: any) => {
  const { name, value } = e.target;
  setFormData((prevState) => ({
   ...prevState,
   [name]: value,
  }));
 };

 const sendEmail = (e: any) => {
  e.preventDefault();
  setIsLoading(true);
  const templateParams: requestEmail = {
   ...formData,
  };

  emailjs
   .send(
    "service_nzipnsk",
    "template_4fdk8i6",
    templateParams,
    "40cIuR45nLk3z7Geb"
   )
   .then(
    () => {
     setFormData({
      from_name: "",
      from_email: "",
      to_name: "Wildan",
      message: "",
     });
     setIsLoading(false);
     alert("Email success to sent.");
    },
    (error) => {
     alert(error);
     setIsLoading(false);
    }
   );
 };

 return (
  <div>
   <h3>Send me email</h3>
   <form onSubmit={sendEmail} className={styles["form-email-container"]}>
    <div className={styles["form-email"]}>
     <label htmlFor="from_name">Your Name:</label>
     <input
      type="text"
      id="from_name"
      name="from_name"
      value={formData.from_name}
      onChange={handleChange}
      required
     />
    </div>

    <div className={styles["form-email"]}>
     <label htmlFor="from_email">Your Email:</label>
     <input
      type="email"
      id="from_email"
      name="from_email"
      value={formData.from_email}
      onChange={handleChange}
      required
     />
    </div>

    <div className={styles["form-email"]}>
     <label htmlFor="message">Message:</label>
     <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={10}
      required
     />
    </div>

    <button
     type="submit"
     className={styles["form-email-button"]}
     disabled={isLoading}
    >
     {isLoading ? (
      <div className={styles["form-email-button-loading"]}>
       <Image src={loading} alt="loading" width={20} height={20} />
       <div>Loading....</div>
      </div>
     ) : (
      <div>Send Message</div>
     )}
    </button>
   </form>
  </div>
 );
};

export default ModalContentEmail;
