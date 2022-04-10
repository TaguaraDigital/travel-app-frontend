import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/img/logos/logo.png"
            alt=""
            width="60"
            height="60"
          />
        </div>
      </div>

      <nav className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <a> Inicio</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/travels">
              <a>Viajes</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/travellers">
              <a>Viajeros</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
