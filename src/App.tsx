import './App.css'
import Pele, { type PeleProps } from './componentes/Pele/Pele'

const listaPeles:PeleProps[]=[
  {tipo:"aaa",adversidade:"bbb",status:"ccc"},
   {tipo:"aaa1",adversidade:"bbb1",status:"ccc1"},
    {tipo:"aa2",adversidade:"bbb2",status:"ccc2"}
]

function App() {
  
  return (
    <div>
      <h1>AAAAAAAA</h1>
      { 
        listaPeles.map(
          (pele)=>
              <Pele tipo={pele.tipo} adversidade={pele.adversidade} status={pele.status}></Pele>
        )}
            </div>

    
  )
}

export default App
