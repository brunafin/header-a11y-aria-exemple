import Section from "../../components/Section";
import { IPage } from "../interfaces";

const Contact = ({ title }: IPage) => {
  return (
    <Section id="contato" title={title}>
      <h2>Fale conosco</h2>
      <form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" rows={5} required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Section>
  )
}

export default Contact;
