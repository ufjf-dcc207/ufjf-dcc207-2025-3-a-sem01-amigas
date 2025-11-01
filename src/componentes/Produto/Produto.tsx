import "./Produto.css"
export type ProdutoProps = {
  tipo: string, 
  adversidade: string,
  status: string;
}


export default function Produto({tipo, adversidade,status}: ProdutoProps) {
  return (
    <div className="ProdutoCtn">
      <div> {tipo}</div>
      <div> {adversidade}</div>
      <div> {status}</div>
    </div>
  )

}