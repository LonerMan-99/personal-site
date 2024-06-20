"use client";

import { ReactElement, useEffect, useState } from "react";
import IconButton from "@/components/icon-button/icon-button";
import StartBar from "@/components/start-bar/start-bar";
import styles from "@/styles/Home.module.css";
import myComputer from "@/assets/computer.png";
import aboutMe from "@/assets/about.png";
import curriculumVitae from "@/assets/cv.png";
import portofolio from "@/assets/portofolio.png";
import email from "@/assets/email.png";
import music from "@/assets/music.png";
import contacts from "@/assets/contacts.png";
import WindowModal from "@/components/window-modal/window-modal";
import ModalContentAboutMe from "@/components/modal-contents/modal-content-about-me";
import ModalContentTechstack from "@/components/modal-contents/modal-content-techstack";
import ModalContentCv from "@/components/modal-contents/modal-content-cv";
import ModalContentPortofolio from "@/components/modal-contents/modal-content-portofolio";
import ModalContentEmail from "@/components/modal-contents/modal-content-email";
import ModalContentMusic from "@/components/modal-contents/modal-content-music";
import ModalContentContacts from "@/components/modal-contents/modal-content-contacts";
import { isMobileDevice } from "@/utils/detect-device";

export default function Home() {
 const [isShownWindow, setIsShownWindow] = useState<boolean>(false);
 const [modalTitle, setModaltitle] = useState<string>("");
 const [content, setContent] = useState<ReactElement>(<></>);

 const handleOpenModalTech = (text: string) => {
  setModaltitle(text);
  setContent(<ModalContentTechstack />);
  setIsShownWindow(true);
 };

 const handleOpenModalAbout = (text: string) => {
  setModaltitle(text);
  setContent(<ModalContentAboutMe />);
  setIsShownWindow(true);
 };

 const handleOpenModalCV = (text: string) => {
  setModaltitle(text);
  setContent(<ModalContentCv />);
  setIsShownWindow(true);
 };

 const handleOpenModalPortofolio = (text: string) => {
  setModaltitle(text);
  setContent(<ModalContentPortofolio />);
  setIsShownWindow(true);
 };

 const handleOpenModalEmail = (text: string) => {
  setModaltitle(text);
  setContent(<ModalContentEmail />);
  setIsShownWindow(true);
 };

 const handleOpenModalMusic = (text: string) => {
  setModaltitle(text);
  setContent(<ModalContentMusic />);
  setIsShownWindow(true);
 };

 const handleOpenModalContacts = (text: string) => {
  setModaltitle(text);
  setContent(
   <ModalContentContacts event={() => handleOpenModalEmail("Email")} />
  );
  setIsShownWindow(true);
 };

 useEffect(() => {
  if (!!isMobileDevice()) {
   alert("Open this website using laptop or PC to feel dekstop experience");
  }
 }, []);

 return (
  <div className={styles.background}>
   <div className={styles["icon-button-container"]}>
    <IconButton
     icon={myComputer}
     text="My Techstack"
     event={() => handleOpenModalTech("My Techstack")}
    />
    <IconButton
     icon={aboutMe}
     text="About Me"
     event={() => handleOpenModalAbout("About Me")}
    />
    <IconButton
     icon={curriculumVitae}
     text="Curriculum vitae"
     event={() => handleOpenModalCV("Curriculum Vitae")}
    />
    <IconButton
     icon={portofolio}
     text="Portofolio"
     event={() => handleOpenModalPortofolio("Portofolio")}
    />
    <IconButton
     icon={email}
     text="Email"
     event={() => handleOpenModalEmail("Email")}
    />
    <IconButton
     icon={music}
     text="Music"
     event={() => handleOpenModalMusic("Music")}
    />
    <IconButton
     icon={contacts}
     text="Contacts Me"
     event={() => handleOpenModalContacts("Contacts")}
    />
   </div>
   <StartBar />

   <WindowModal
    isShown={isShownWindow}
    closeModal={() => setIsShownWindow(false)}
    title={modalTitle}
   >
    {content}
   </WindowModal>
  </div>
 );
}
