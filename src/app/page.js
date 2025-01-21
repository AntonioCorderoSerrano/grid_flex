import Image from "next/image";
import styles from "./page.module.css";
import "/styles/styles.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <nav>
        <p>Esto es el nav</p>
      </nav>
      <main className={styles.main}>
        <div>
          <h1>Página de prueba </h1>
          <p>Mi gente, estamo en japón</p>
        </div>
        <img src="/img/japon.jpg"></img>
      </main>
      <footer className={styles.footer}>
        <p>Esto es el footer, brrrr</p>
      </footer>
    </div>
  );
}
