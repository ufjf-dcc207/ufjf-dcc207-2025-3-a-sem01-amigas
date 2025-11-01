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

function App() {
  
  return (
    <div>
      <h1>AAAAAAAA</h1>
      <Pele tipo='aaa' adversidade='bbb' status='ccc'></Pele>
    </div>

    
  )
}

export default App
