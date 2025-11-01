import { useState } from 'react'
import './App.css'
type PeleProps = {
  tipo: string, 
  adversidade: string,
  status: string;
}

function Pele({tipo, adversidade,status}: PeleProps) {
  return (
    <div>
      <div> {tipo}</div>
      <div> {adversidade}</div>
      <div> {status}</div>
    </div>
  )

}
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
