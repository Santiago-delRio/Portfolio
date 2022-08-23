/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Bloquear el scroll cuando esta el menu del nav abierto
  useEffect(() => {
    menuAbierto
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [menuAbierto]);

  return (
    <header className={styles.navbar}>
      <nav>
        <a
          href="/#home"
          onClick={() => {
            setMenuAbierto(false);
          }}
          className={styles.logo}
        >
          Santiago del Río
        </a>

        {/* Boton menu */}
        <div
          className={
            menuAbierto
              ? [styles.btnMenu, styles.activeBtn].join(" ")
              : styles.btnMenu
          }
          tabIndex={0}
          onClick={() => {
            setMenuAbierto(!menuAbierto);
            window.scrollTo(0,0);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Links celular */}
        <ul
          className={
            menuAbierto
              ? [styles.linksCelular, styles.menuAbierto].join(" ")
              : styles.linksCelular
          }
        >
          <li>
            <a
              href="/#home"
              onClick={() => {
                setMenuAbierto(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#myWork"
              onClick={() => {
                setMenuAbierto(false);
              }}
            >
              My work
            </a>
          </li>
          <li>
            <a
              href="/#contactMe"
              onClick={() => {
                setMenuAbierto(false);
              }}
            >
              Contact me
            </a>
          </li>
        </ul>
        {/* Links escritorio */}
        <ul className={styles.linksEscritorio}>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#myWork">My work</a>
          </li>
          <li>
            <a href="/#contactMe">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
