import Image from "next/image";
import styles from "./page.module.css";
import "/styles/styles.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <p>Tengo una casa que cabe un aeropuerto</p>
      </nav>
      <main className={styles.main}>
        <div>
          <h1>Arcangel Pá</h1>
          <p>Mi hente, estamo en Japón, hente con cojone</p>
        </div>
        <img src="/img/japon.jpg"></img>
      </main>
      <footer className={styles.footer}>
        <p>Esto es el footer, brrrrrr</p>
      </footer>
    </div>
  );
}
