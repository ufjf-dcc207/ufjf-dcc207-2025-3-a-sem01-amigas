import Pele, { type PeleProps } from "../Pele/Pele";
import Produto, { type ProdutoProps } from "../Produto/Produto";

export type SkinCareProps = {
  produto: ProdutoProps;
  pele: PeleProps;
};
export default function SkinCare({ pele, produto }: SkinCareProps) {
  return (
    <div>
      <Pele tipo={pele.tipo} adversidade={pele.adversidade} status={pele.status} />
      <Produto icone={produto.icone} nome={produto.nome} uso={produto.uso} />
    </div>
  );
}