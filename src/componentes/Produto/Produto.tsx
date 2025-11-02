import "./Produto.css"
export type ProdutoProps = {
  nome: string,
  uso: string;
}


export default function Produto({ nome, uso}: ProdutoProps) {
  return (
    <div className="ProdutoCtn">
      <div> {nome}</div>
      <div> {uso}</div>
    </div>
  )

}