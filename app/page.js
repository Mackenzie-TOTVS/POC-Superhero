"use client"
import React, { useEffect, useState } from "react";
import VitrineAnimeCard from './components/VitrineAnimesCard.jsx'
import styles from "./page.module.css";

export default function Home(){ 

  const [animes, setAnimes] = useState([]); 

  useEffect(() => {
      async function fetchAnimes() {
        try {
          const res = await fetch("https://api.jikan.moe/v4/seasons/2021/spring?sfw");
          const data = await res.json(); 
          setAnimes(data); 
          console.log(data);
        } catch (err) {
          console.error("Failed to fetch heroes:", err);
        }
      }
  
      fetchAnimes();
  }, []);
  
  
return (
      <div className={styles.container}>
    <VitrineAnimeCard animes={animes.data}>

    </VitrineAnimeCard>
    </div>
  );
}