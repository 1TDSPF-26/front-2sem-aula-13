import { Link } from "react-router";
import { listaProdutos } from "../../components/Menu/Menu";

export default function Produto() {
  document.title = "Produto";

  return (
    <main>
      <h2>Produtos</h2>

      {listaProdutos.map((produto) => (
        <article key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Preço: R$ {produto.preco}</p>
          <figure>
            <img src={produto.avatar} alt={produto.nome} />
          </figure>
          <Link to={`/produtos/${produto.id}`}>Editar Produto</Link>
        </article>
      ))}
    </main>
  );
}
