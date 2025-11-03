import "./App.css";
import SkinCare, { type SkinCareProps } from "./componentes/SkinCare/SkinCare";

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
    produto:[ {etapa: "LIMPEZA", item: "ccc" },
            {etapa: "HIDRATAÇÃO", item: "ccc" },
            {etapa: "TRATAMENTO", item: "ccc" }]
  },
  {
    pele: {
      tipo: "Oleosa",
      adversidade:
        "Excesso de brilho, acne, cravos, poros dilatados, tendência à inflamação.",
      status:
        "Produz mais sebo que o necessário; aparência brilhante; textura espessa.",
    },
    produto: [ {etapa: "LIMPEZA", item: "ccc" },
            {etapa: "HIDRATAÇÃO", item: "ccc" },
            {etapa: "TRATAMENTO", item: "ccc" }]
  },
  {
    pele: {
      tipo: "Seca",
      adversidade:
        "Ressecamento, descamação, coceira, sensibilidade, sensação de repuxamento.",
      status: "Baixa produção de oleosidade; toque áspero; aparência opaca.",
    },
    produto:[ {etapa: "LIMPEZA", item: "ccc" },
            {etapa: "HIDRATAÇÃO", item: "ccc" },
            {etapa: "TRATAMENTO", item: "ccc" }]
  },
  {
    pele: {
      tipo: "Normal",
      adversidade:
        "Raras imperfeições; leve ressecamento em clima seco; poros pouco visíveis.",
      status: "Equilibrada — nem seca nem oleosa; textura macia e viçosa.",
    },
    produto:  [ {etapa: "LIMPEZA", item: "ccc" },
            {etapa: "HIDRATAÇÃO", item: "ccc" },
            {etapa: "TRATAMENTO", item: "ccc" }]
  },
  {
    pele: {
      tipo: "Sensível",
      adversidade:
        "Vermelhidão, ardor, coceira, irritações com produtos ou clima; rosácea em alguns casos.",
      status:
        "Pele reativa; barreira cutânea mais fina; exige produtos suaves e calmantes.",
    },
    produto: [ {etapa: "LIMPEZA", item: "ccc" },
            {etapa: "HIDRATAÇÃO", item: "ccc" },
            {etapa: "TRATAMENTO", item: "ccc" }]
  },
];

// --- Componente principal ---
function App() {
  return (
    <div className="App">
      <h1 className="titulo">Produtos de skin care para cada tipo de pele</h1>
      <h2 className="subtitulo">Tipos de pele:</h2>

      <main className="SkincaresCtn">

        {listaSkincare.map((item, index) => (
                <SkinCare key={index} produto={item.produto} pele={item.pele} />
              ))}
      </main> 

     
    </div>
  );
}

export default App;
