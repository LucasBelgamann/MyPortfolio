import "./Footer.css";
import git from "./images/git.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/Insta.png";

function Footer() {
  return (
    <div>
      <div className="container-form">
        <form className="form">
          <h2 id="footer">Formulário para contato</h2>
          <input type="text" placeholder="Type your name"/>
          <input type="email" placeholder="Type your email" />
          <textarea placeholder="Type your message" />
          <button type="submit">Enviar</button>
          <button type="submit">Dowload cv</button>
        </form>
       <div className="links">
          <a href="https://github.com/LucasBelgamann">
            <img src={git} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/lucasbelgamann/" className="linked">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/lucasag0stinh0/">
            <img src={instagram} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="developer">
        <span>Developed by Lucas Agostinho</span>
      </div>
    </div>
  );
}

export default Footer;
