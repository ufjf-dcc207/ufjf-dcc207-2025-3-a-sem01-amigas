import "./Produto.css"
export type ProdutoProps = {
  etapa: string,
  produto: string;
}


export default function Produto({ etapa, produto}: ProdutoProps) {
  return (
    <div className="ProdutoCtn">
      <div className="EtapaCtn"> {etapa}</div>
      <div> {produto}</div>
    </div>
  )

}