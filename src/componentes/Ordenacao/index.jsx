import "./style.css";

export default function Ordenacao() {
  return (
    <section className="container-ordenacao">
      <ul>
        <li>
          <a href="#" className="ordenacao__link ordenacao__link-ativo">
            Recentes
          </a>
        </li>
        <li>
          <a href="#" className="ordenacao__link">
            Recentes
          </a>
        </li>
      </ul>
    </section>
  );
}
