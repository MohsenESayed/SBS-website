import styles from "./Header.module.css";
import Logo from "../../public/icons/logo_main 1.png";
// pathname
import { useLocation } from "react-router-dom";

export const HeaderLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/our-story" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const pathname = useLocation().pathname;
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo with hands and Arabic text" />
      </div>
      <nav>
        <ul>
          {HeaderLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className={pathname === link.path ? styles.active : ""}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
