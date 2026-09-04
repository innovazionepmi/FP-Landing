import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header>
      <div className={styles.heroImage}>
        <Image
          src="/images/Image-Master-Header-2026.jpg"
          alt="The Image Master — Fotografia Professionale"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.band}>
        <h1 className={styles.headline}>
          Smetti di giocare con l&apos;AI e diventa un professionista della
          creazione sinergica.
        </h1>
        <p className={styles.subheadline}>
          Ecco finalmente il metodo per creare immagini di livello
          professionale integrando la Generazione AI nei tuoi processi di
          lavoro.
        </p>
        <a href="#form-hero" className={styles.heroCta}>
          Richiedi Informazioni
        </a>
      </div>
    </header>
  );
}
