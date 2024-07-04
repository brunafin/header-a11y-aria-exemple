import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div id="cta">
      <h2>Pronto para Começar?</h2>
      <p>Entre em contato conosco para mais informações.</p>
      <Link to="/contato">Contate-nos</Link>
    </div>
  )
}

export default CTA;
