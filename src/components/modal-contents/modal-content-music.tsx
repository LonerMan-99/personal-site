import React, { useState, useRef, useEffect } from "react";
import { PLAYLIST_MUSIC } from "@/constants/playlist-music.constant";
import { IoMdPlay, IoMdPause } from "react-icons/io";

import styles from "./modal-content-music.module.css";

const ModalContentMusic = () => {
 const [currentSong, setCurrentSong] = useState<string | null>(null);
 const [isPlaying, setIsPlaying] = useState(false);
 const [currentTime, setCurrentTime] = useState(0);
 const [duration, setDuration] = useState(0);
 const audioRef = useRef<HTMLAudioElement>(null);
 const intervalRef = useRef<NodeJS.Timeout | null>(null);

 const handleSelectSong = (songUrl: string) => {
  setCurrentSong(songUrl);
  setIsPlaying(true);
 };

 const handleTogglePlay = () => {
  setIsPlaying(!isPlaying);
 };

 const handleTimeUpdate = () => {
  if (audioRef.current) {
   setCurrentTime(audioRef.current.currentTime);
  }
 };

 const handleLoadedMetaData = () => {
  if (audioRef.current) {
   setDuration(audioRef.current.duration);
  }
 };

 useEffect(() => {
  if (audioRef.current) {
   if (isPlaying) {
    audioRef.current.play();
    startTimer();
   } else {
    audioRef.current.pause();
    clearInterval(intervalRef.current!);
   }
  }
  return () => {
   clearInterval(intervalRef.current!);
  };
 }, [isPlaying, currentSong]);

 const startTimer = () => {
  clearInterval(intervalRef.current!);
  intervalRef.current = setInterval(() => {
   if (audioRef.current && audioRef.current.ended) {
    clearInterval(intervalRef.current!);
    setIsPlaying(false);
   } else {
    setCurrentTime(audioRef.current!.currentTime);
   }
  }, 1000);
 };

 const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (audioRef.current) {
   audioRef.current.currentTime = Number(event.target.value);
   setCurrentTime(audioRef.current.currentTime);
  }
 };

 const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
 };

 return (
  <div>
   <h3>Play some music</h3>
   <fieldset className={styles["Music-playlist"]}>
    <legend>Playlist</legend>
    {PLAYLIST_MUSIC.map((data, index) => (
     <button
      onClick={() => handleSelectSong(data.path)}
      key={index}
      className={styles["Music-playlist-button"]}
     >
      <IoMdPlay color="black" />
      <span> {data.nameSong}</span>
     </button>
    ))}
   </fieldset>
   {currentSong && (
    <fieldset className={styles["Music-player"]}>
     <div>Now Playing:</div>
     <p>{currentSong}</p>
     <audio
      ref={audioRef}
      src={currentSong}
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={handleLoadedMetaData}
     ></audio>
     <div>
      <button onClick={handleTogglePlay}>
       {isPlaying ? (
        <div className={styles["Music-player-button"]}>
         <IoMdPause color="black" />
         <span>Pause</span>
        </div>
       ) : (
        <div className={styles["Music-player-button"]}>
         <IoMdPlay color="black" /> <span>Play</span>
        </div>
       )}
      </button>
     </div>
     <div>
      <input
       type="range"
       value={currentTime}
       max={duration}
       onChange={handleSeek}
       className={styles["Music-player-slide"]}
      />
      <div className={styles["Music-player-times"]}>
       <span>{formatTime(currentTime)}</span>
       <span>{formatTime(duration)}</span>
      </div>
     </div>
    </fieldset>
   )}
  </div>
 );
};

export default ModalContentMusic;
