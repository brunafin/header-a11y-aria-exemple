import Section from "../../components/Section";
import { IPage } from "../interfaces";

const About = ({ title }: IPage) => {
  return (
    <Section id="sobre" title={title}>
      <h2>Sobre Nós</h2>
      <p>Uma breve descrição sobre a empresa.</p>
    </Section>
  )
}

export default About;
