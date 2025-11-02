import "./App.css";
import Pele, { type PeleProps } from "./componentes/Pele/Pele";
import Produto, { type ProdutoProps } from "./componentes/Produto/Produto";



const listaPeles: PeleProps[] = [
  { tipo: "Mista", adversidade: "Oleosidade na zona T (testa, nariz e queixo) e ressecamento nas bochechas; poros dilatados na zona T.", 
    status: "Equilíbrio entre áreas oleosas e secas; precisa de cuidados específicos para cada região." },
  { tipo: "Oleosa", adversidade: "Excesso de brilho, acne, cravos, poros dilatados, tendência à inflamação.", 
    status: "Produz mais sebo que o necessário; aparência brilhante; textura espessa." },
  { tipo: "Seca", adversidade: "Ressecamento, descamação, coceira, sensibilidade, sensação de repuxamento.", 
    status: "Baixa produção de oleosidade; toque áspero; aparência opaca." },
  { tipo: "Normal", adversidade: "Raras imperfeições; leve ressecamento em clima seco; poros pouco visíveis.", 
    status: "Equilibrada — nem seca nem oleosa; textura macia e viçosa." },
  { tipo: "Sensível", adversidade: "Vermelhidão, ardor, coceira, irritações com produtos ou clima; rosácea em alguns casos.", 
    status: "Pele reativa; barreira cutânea mais fina; exige produtos suaves e calmantes." },
];

const listaProduto: ProdutoProps[] = [
  
  { icone: "aaa", nome: "bbb", uso: "ccc" },
  { icone: "aaa1", nome: "bbb1", uso: "ccc1" },
  { icone: "aa2", nome: "bbb2", uso: "ccc2" },
];


function App() {
  return (
    <div>
     
        <h1 className="titulo">Produtos de skin care para 
          cada tipo de pele</h1>
          <h2 className="subtitulo">Tipos de pele:</h2>

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
