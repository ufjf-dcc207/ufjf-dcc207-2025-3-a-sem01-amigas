import Pele, { type PeleProps } from "../Pele/Pele";
import Produto, { type ProdutoProps } from "../Produto/Produto";
import './SkinCare.css'
import CuidadosImg from "../../assets/cuidados.png"

export type SkinCareProps = {
  produto: ProdutoProps;
  pele: PeleProps;
};

export default function SkinCare({ pele, produto }: SkinCareProps) {
  return (
    <div className="skinCareCtn">
      <Pele tipo={pele.tipo} adversidade={pele.adversidade} status={pele.status} />
      <img className="imageSC" src={CuidadosImg} />
      <Produto  etapa={produto.etapa} produto={produto.produto} />
    </div>
  );
}