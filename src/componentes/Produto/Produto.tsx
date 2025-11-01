import "./Produto.css"
export type ProdutoProps = {
  icone: string, 
  nome: string,
  uso: string;
}


export default function Produto({icone, nome, uso}: ProdutoProps) {
  return (
    <div className="ProdutoCtn">
      <div> {icone}</div>
      <div> {nome}</div>
      <div> {uso}</div>
    </div>
  )

}