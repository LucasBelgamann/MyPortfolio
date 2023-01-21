import "./Footer.css";
import git from "./images/git.png";
import linkedin from "./images/linkedin.png";

function Footer() {
  return (
    <div>
      <div className="container-form">
        <form className="form">
          <h2 id="footer">Contact me</h2>
          <input type="text" placeholder="Type your name"/>
          <input type="email" placeholder="Type your email" />
          <textarea placeholder="Type your message" />
          <button>Submit</button>
          <button>Dowload cv</button>
        </form>
        <div className="links">
          <a href="https://github.com/LucasBelgamann">
            <img src={git} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/lucasbelgamann/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
