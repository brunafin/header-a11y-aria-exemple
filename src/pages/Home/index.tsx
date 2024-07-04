import CTA from "../../components/CTA";
import Section from "../../components/Section";
import { IPage } from "../interfaces";

const Home = ({ title }: IPage) => {
  return (
    <Section id="pagina inicial" title={title}>
      <h2>Bem-vindo à Nossa Landing Page</h2>
      <p>Aqui você encontra tudo o que precisa.</p>
      <a href="#cta">Saiba Mais</a>
      <CTA />
    </Section>

  )
}
export default Home;
