import "./App.css";
import Pele, { type PeleProps } from "./componentes/Pele/Pele";
import Produto, { type ProdutoProps } from "./componentes/Produto/Produto";

// --- Tipos ---
export type SkinCareProps = {
  produto: ProdutoProps;
  pele: PeleProps;
};

// --- Dados ---
const listaSkincare: SkinCareProps[] = [
  {
    pele: {
      tipo: "Mista",
      adversidade:
        "Oleosidade na zona T (testa, nariz e queixo) e ressecamento nas bochechas; poros dilatados na zona T.",
      status:
        "Equilíbrio entre áreas oleosas e secas; precisa de cuidados específicos para cada região.",
    },
    produto: { icone: "aaa", nome: "bbb", uso: "ccc" },
  },
  {
    pele: {
      tipo: "Oleosa",
      adversidade:
        "Excesso de brilho, acne, cravos, poros dilatados, tendência à inflamação.",
      status:
        "Produz mais sebo que o necessário; aparência brilhante; textura espessa.",
    },
    produto: { icone: "aaa1", nome: "bbb1", uso: "ccc1" },
  },
  {
    pele: {
      tipo: "Seca",
      adversidade:
        "Ressecamento, descamação, coceira, sensibilidade, sensação de repuxamento.",
      status: "Baixa produção de oleosidade; toque áspero; aparência opaca.",
    },
    produto: { icone: "aa2", nome: "bbb2", uso: "ccc2" },
  },
  {
    pele: {
      tipo: "Normal",
      adversidade:
        "Raras imperfeições; leve ressecamento em clima seco; poros pouco visíveis.",
      status: "Equilibrada — nem seca nem oleosa; textura macia e viçosa.",
    },
    produto: { icone: "avon", nome: "Creme Hidratante", uso: "Uso diário" },
  },
  {
    pele: {
      tipo: "Sensível",
      adversidade:
        "Vermelhidão, ardor, coceira, irritações com produtos ou clima; rosácea em alguns casos.",
      status:
        "Pele reativa; barreira cutânea mais fina; exige produtos suaves e calmantes.",
    },
    produto: { icone: "nivea", nome: "Gel Calmante", uso: "Após limpeza" },
  },
];
// --- Componentes ---
function SkinCare({ pele, produto }: SkinCareProps) {
  return (
    <div>
      <Pele tipo={pele.tipo} adversidade={pele.adversidade} status={pele.status} />
      <Produto icone={produto.icone} nome={produto.nome} uso={produto.uso} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="titulo">Produtos de skin care para cada tipo de pele</h1>
      <h2 className="subtitulo">Tipos de pele:</h2>

      {listaSkincare.map((item, index) => (
        <SkinCare
          key={index}
          produto={item.produto}
          pele={item.pele}
        />
      ))}
    </div>
  );
}

export default App;
