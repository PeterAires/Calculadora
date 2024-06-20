import { useState } from "react"

function App(){

  const [calculadora,setCalculadora] = useState([])
  const [primeiroNumero,setPrimeiroNumero] = useState()
  const [operador,setOperador] = useState()
  const [segundoNumero,setSegundoNumero] = useState()

  

  return(
    <div>
      <button onClick={(e) => setPrimeiroNumero(1)}>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button>%</button>
      <button>x</button>
      <button>-</button>
      <button>+</button>
      <button>=</button>
      {primeiroNumero}

    </div>
      )
}
export default App
