import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navPc">
      <a href="#" className="icon">
        <AiIcons.AiFillBug />
      </a>
      <ul>
        <li>
          <AiIcons.AiFillHome />
          <a href="#" class="link">
            Início
          </a>
        </li>
        <li>
          <IoIcons.IoIosPaper />
          <a href="#about-title" class="link">
            Sobre mim
          </a>
        </li>
        <li>
          <AiIcons.AiFillFolder />
          <a href="#projects" class="link">
            Projetos
          </a>
        </li>
        <li>
          <FaIcons.FaLaptopCode />
          <a href="#hards" class="link">
            Habilidades
          </a>
        </li>
        <li>
          <FaIcons.FaEnvelopeOpenText />
          <a href="#contact" class="link">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
