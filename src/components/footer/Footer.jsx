import "./Footer.css";
import git from "./images/git.png";
import linkedin from "./images/linkedin.png";
import instagram from "./images/Insta.png";

function Footer() {
  return (
    <div>
      <div className="container-form">
        <form
          className="form"
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <h2 id="footer">Formulário para contato</h2>
          <input
            type="hidden"
            name="accessKey"
            value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
          />
          <input
            type="hidden"
            name="redirectTo"
            value="https://my-portfolio-git-main-lucasbelgamann.vercel.app/"
          ></input>
          <input type="text"  name="name" placeholder="Digite seu nome" />
          <input type="email" name="email" placeholder="Type your email" />
          <textarea placeholder="Digite sua menssagem" name="message" />
          <button type="submit">Enviar</button>
        </form>
        <div class="line"></div>
        <div className="links">
          <a href="https://github.com/LucasBelgamann">
            <img src={git} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasbelgamann/"
            className="linked"
          >
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
