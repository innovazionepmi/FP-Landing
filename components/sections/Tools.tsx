import Image from "next/image";
import shared from "./shared.module.css";
import styles from "./WhatYouLearn.module.css";

const tools = [
  {
    title: "Percorso Guidato e Progressivo",
    text: "Un piano didattico chiaro, diviso in moduli settimanali, che potrai seguire senza sforzi. Saprai sempre cosa studiare e dove trovare ciò che ti serve.",
  },
  {
    title: "Sessioni in Live Streaming",
    text: "10 Sessioni settimanali in Live Streaming di 2 ore per scoprire insieme i processi di creazione delle immagini, passo dopo passo, con la possibilità di interagire e fare domande.",
  },
  {
    title: "Video Corsi",
    text: "Una serie di video-corsi completamente nuovi, dallo sviluppo della creatività alla Generazione AI, fino al Ritocco Professionale e al fotomontaggio. Restano tuoi per sempre e vengono aggiornati gratuitamente.",
  },
  {
    title: "Esercitazioni Pratiche",
    text: "Realizzerai insieme a Simone le immagini di ogni modulo: Fashion, Still Life e Advertising, con un brief chiaro condiviso durante gli streaming in diretta.",
  },
  {
    title: "Schede Tecniche",
    text: "Una serie di schede tecniche utilissime che affrontano un argomento specifico e risolvono un problema in modo semplice e veloce.",
  },
  {
    title: "Teamwork: un lavoro di squadra",
    text: "Accesso al Gruppo Facebook Privato “The Image Forge” per confrontarti con il team e gli altri allievi, condividere progressi e ricevere supporto.",
  },
];

export default function Tools() {
  return (
    <section className={`${shared.section} ${shared.sectionAlt}`}>
      <div className={shared.container}>
        <span className={shared.eyebrow}>Come funziona</span>
        <h2 className={shared.heading}>Gli Strumenti che avrai a disposizione</h2>
        <div className={styles.wrap}>
          <ul className={shared.bulletList}>
            {tools.map((t) => (
              <li key={t.title}>
                <strong>{t.title}</strong> — {t.text}
              </li>
            ))}
          </ul>
          <div className={`${styles.imageBox} ${styles.imageBoxReverse}`}>
            <Image
              src="/images/Strumenti.jpg"
              alt="Gli strumenti di The Image Master"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
