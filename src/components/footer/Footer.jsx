import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-contact">
        <div className="contact">
        <div className="contact-form" id="contact">
            <h3 id="contact">Fale comigo</h3>
            <form action="https://api.staticforms.xyz/submit" method="post">
              <div className="sigle-input">
                <input
                  type="text"
                  name="name"
                  required
                  className="input"
                  id="nome"
                />
                <label htmlFor="nome">Nome</label>
              </div>
              <div className="sigle-input">
                <input
                  type="text"
                  name="email"
                  required
                  className="input"
                  id="email"
                />
                <label htmlFor="email">Telefone</label>
              </div>
              <textarea
                name="message"
                required
                className="textarea"
                placeholder="Digite a sua mensagem"
              />
              <input
                type="hidden"
                name="accessKey"
                value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
              ></input>
              <input
                type="hidden"
                name="redirectTo"
                value="https://acqualine.vercel.app/"
              ></input>
              <button>Enviar</button>
            </form>
          </div>
          <div className="contact-line"></div>
          <div className="links-contact">
            <div className="contact-info">
              <div>
                <a
                  href="https://github.com/LucasBelgamann"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiIcons.AiFillGithub />
                </a>
              </div>
            </div>
            <div className="contact-info">
              <div>
                <a
                  href="https://www.linkedin.com/in/lucas-gabriel-belgamann-2b0497174/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  <AiIcons.AiFillLinkedin />
                </a>
              </div>
            </div>
            <div className="contact-info">
              <div>
                <a
                  href="https://www.instagram.com/lucasag0stinh0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrIcons.GrInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="developer">
          <span>Developed by Lucas Agostinho</span>
      </div>
    </div>
  );
};
export default Footer;
