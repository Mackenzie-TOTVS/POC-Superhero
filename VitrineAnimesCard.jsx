"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import VitrineAnimesCard from './components/VitrineAnimesCard.jsx'
export default function Home() {
  const [animes, setAnimes] = useState([]); 

  useEffect(() => {
    async function fetchAnimes() {
      try {
        const res = await fetch("https://api.jikan.moe/v4/seasons/2021/spring?sfw");
        const dados = await res.json(); 
        setAnimes(dados); 
        console.log(dados);
      } catch (err) {
        console.error("Failed to fetch heroes:", err);
      }
    }

    fetchAnimes();
  }, []);

  return (
      <div className={styles.container}>
          <VitrineAnimeCard animes={animes.data}>
              
          </VitrineAnimesCard>
    </div>
  );
}
