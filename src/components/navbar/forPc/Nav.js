import * as AiIcons from 'react-icons/ai';
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navPc">
      <a href="#" className="icon">
        <AiIcons.AiFillBug />
      </a>
      <ul>
        <li>
          <a href="#" class="link">
            Início
          </a>
        </li>
        <li>
          <a href="#about-title" class="link">
          Sobre mim
          </a>
        </li>
        <li>
          <a href="#projects" class="link">
            Projetos
          </a>
        </li>
        <li>
          <a href="#hards" class="link">
           Habilidades
          </a>
        </li>
        <li>
          <a href="#footer" class="link">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
