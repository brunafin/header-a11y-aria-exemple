import { Link } from "react-router-dom";
import Section from "../../components/Section";
import { IPage } from "../interfaces";

const Products = ({ title }: IPage) => {
  return (
    <Section id="servicos" title={title}>
      <h2>Principais serviços</h2>
      <article>
        <h3>Ferramentas para validar se o seu site é acessível</h3>
        <p>Neste artigo você vai encontrar 3 ferramentas muito utilizadas para validar a qualidade da aplicação em relação a acessibilidade.</p>
        <ol>
          <li>Jest Axe</li>
          <li>Axe Dev Tools</li>
          <li>WAVE</li>
        </ol>
      </article>
      <article>
        <h3>Como semear a cultura da acessibilidade na Soft Design?</h3>
        <p>A empresa Soft Design possui uma cultura de troca de conhecimento contínua.</p>
        <p>É possível trocar conhecimento, através de Soft Drops ou CoP</p>
        <p>É possível sinalizar melhorias de processo através do Kaizen</p>
        <p>É possível aprender através das trilhas de conhecimento</p>
        <ol>
          <li>Soft Drops</li>
          <li>CoP</li>
          <li>Kaizen</li>
          <li>Trilha de conhecimento</li>
        </ol>
      </article>
      <article>
        <h3>Grupos de estudo</h3>
        <p>Temos um grupo de estudos fechado onde semanalmente nos encontramos para conversar sobre acessibilidade.</p>
      </article>
      <article>
        <h3><Link to="/servicos/principios">Os 4 princípios na prática</Link></h3>
        <ul>
          <li>Perceptível</li>
          <li>Operável</li>
          <li>Compreensível</li>
          <li>Robusto</li>
        </ul>
      </article>
    </Section>
  )
}

export default Products;
