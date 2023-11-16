import { NavLink } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <section className="header">
      <article className="nav-menu">
        <nav>
          <ul>
            <li>
              <NavLink to="/chci-nabidku">Chci Nabídku</NavLink>
            </li>
            <li>
              <NavLink to="/vypis-nabidek">Vypsat Nabídky</NavLink>
            </li>
          </ul>
        </nav>
      </article>
    </section>
  );
};

export default Header;
