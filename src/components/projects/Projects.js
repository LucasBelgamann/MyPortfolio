import "./Projects.css";
import image1 from "./images/1.jpg";
import image3 from "./images/3.jpg";

const ProjectsTeste = () => {
  return (
    <div className="container-pro">
      <h1 className="title-projects" id="projects">
        Projetos
      </h1>
      <div className="container-projects">
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <h2>Delivery app</h2>
            <p>
              Nessa aplicação, o grupo foi responsável por criar e integrar
              tanto o back-end quanto o front-end, sendo o principal objetivo
              desenvolver um app de delivery para uma distribuidora de bebidas.
            </p>
            <div className="techs">
              <span className="Js">Java Script</span>
              <span className="Node">Nodejs.</span>
              <span className="Mysql">Mysql</span>
              <span className="react">React.js</span>
            </div>
            <button type="button" className="more">
              <a href="https://github.com/LucasBelgamann/delivery_app" target="_blank" rel="noreferrer">
                Ver mais...
              </a>
            </button>
          </div>
          <img src={image1} alt="" />
        </div>
        <div class="card">
          <div class="circle"></div>
          <div class="content">
            <h2>App de receitas</h2>
            <p>
              O app de receitas é um projeto onde foi contruido um aplicativo de
              receitas, que no qual o usuário tem a possibilidade de de
              favoritar, salvar, compartilhar uma receita. Tendo acesso a uma
              página completa com todos os detalhes de como fazer o prato ou uma
              bebida.
            </p>
            <div className="techs">
              <span className="Js">Java Script</span>
              <span className="react">React.js</span>
            </div>
            <button type="button" className="more">
              <a href="https://recipes-app-project-umber.vercel.app/" target="_blank" rel="noreferrer">
                Ver mais...
              </a>
            </button>
          </div>
          <img src={image3} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ProjectsTeste;
