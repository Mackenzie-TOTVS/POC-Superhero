import React from "react";
import styles from "./VitrineAnimeCard.module.css";

export default function VitrineAnimeCard({ animes }) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
      {Array.isArray(animes) &&
        animes
          .filter(
            (data) =>
              data &&
              data.title &&
              data.images &&
              data.images.jpg &&
              data.images.jpg.large_image_url
          ) 
        .map((data) => (
          <article className={styles.card}>
            <img
              src={data.images.jpg.large_image_url}
              alt={"imagem de" + data.title}
              key={data.id || Math.random()} 
              className={styles.imagem}
              
            />
            <h1 className={styles.nome}>{data.nome}</h1>
            <p >Episódios: {data.episodes}</p>
            <p>Duração: {data.duration}</p>
            <p>Rank: {data.rank}</p>
          </article>
          ))}
      </div>
    </div>
  );
}
