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
            
          </a>
        </li>
        <li>
          <a href="#" class="link">
            Home
          </a>
        </li>
        <li>
          <a href="#about-title" class="link">
            About me
          </a>
        </li>
        <li>
          <a href="#projects" class="link">
            Projects
          </a>
        </li>
        <li>
          <a href="#hards" class="link">
            Hards skills
          </a>
        </li>
        <li>
          <a href="#footer" class="link">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
