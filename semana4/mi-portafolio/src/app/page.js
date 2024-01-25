import Image from "next/image";
import styles from "./page.module.css";
import PerfilPrincipal from "./components/PerfilPrincipal";

export default function Home() {
  return (
    <main className={styles.main}>
      <PerfilPrincipal/>
    </main>
  );
}
