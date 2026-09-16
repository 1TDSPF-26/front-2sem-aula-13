import { useParams } from "react-router";
import { listaProdutos } from "../../components/Menu/Menu";

export default function EditarProduto() {
  document.title = "Editar Produtos";

  const { id } = useParams<string>();
  const produto = listaProdutos.find(
    (produto) => produto.id === Number(id),
  );

  return (
    <main>
      <h2>Editar Produto</h2>
      <p>Id: {id}</p>
      {produto ? (
        <div>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <p>Preço: R$ {produto.preco}</p>
          <figure>
            <img src={produto.avatar} alt={produto.nome} />
          </figure>
        </div>
      ) : (
        <h3>Produto não encontrado!</h3>
      )}
    </main>
  );
}
