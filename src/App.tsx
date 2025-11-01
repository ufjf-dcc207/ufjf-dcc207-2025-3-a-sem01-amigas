import "./App.css";
import Pele, { type PeleProps } from "./componentes/Pele/Pele";
import Produto, { type ProdutoProps } from "./componentes/Produto/Produto";

const listaPeles: PeleProps[] = [
  { tipo: "aaa", adversidade: "bbb", status: "ccc" },
  { tipo: "aaa1", adversidade: "bbb1", status: "ccc1" },
  { tipo: "aa2", adversidade: "bbb2", status: "ccc2" },
];

const listaProduto: ProdutoProps[] = [
  { icone: "aaa", nome: "bbb", uso: "ccc" },
  { icone: "aaa1", nome: "bbb1", uso: "ccc1" },
  { icone: "aa2", nome: "bbb2", uso: "ccc2" },
];

function App() {
  return (
    <div>
      <h1>AAAAAAAA</h1>
      {listaPeles.map((pele) => (
        <Pele
          tipo={pele.tipo}
          adversidade={pele.adversidade}
          status={pele.status}
        ></Pele>
      ))}
      {listaProduto.map((produto) => (
        <Produto icone={produto.icone} nome={produto.nome} uso={produto.uso} />
      ))}
    </div>
  );
}

export default App;
