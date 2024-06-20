import './App.css'
import { useState } from "react"

function App(){

  const [calculadora,setCalculadora] = useState([])
  const [primeiroNumero,setPrimeiroNumero] = useState('')
  const [operador,setOperador] = useState()
  const [segundoNumero,setSegundoNumero] = useState('')

  const VerificarNumeros = (num) => {
    if (primeiroNumero !== '' && segundoNumero !== '') {
      return 
    }
    else
    {if (primeiroNumero !== '') {
      setSegundoNumero(num)
    }

    else{setPrimeiroNumero(num)}
  }}
    
  
  const VerificarOperadores = (op) => {
    if (primeiroNumero === '') {
      window.alert('selecione um numero primeiro')
    }
    else{
      setOperador(op)
    }
  }

  return(
      <div>
      <button onClick={() => VerificarNumeros(1)}>1</button>
      <button onClick={() => VerificarNumeros(2)}>2</button>
      <button onClick={() => VerificarNumeros(3)}>3</button>
      <button onClick={() => VerificarNumeros(4)}>4</button>
      <button onClick={() => VerificarNumeros(5)}>5</button>
      <button onClick={() => VerificarNumeros(6)}>6</button>
      <button onClick={() => VerificarNumeros(7)}>7</button>
      <button onClick={() => VerificarNumeros(8)}>8</button>
      <button onClick={() => VerificarNumeros(9)}>9</button>
      <button onClick={() => VerificarNumeros(0)}>0</button>
      <button onClick={() => VerificarOperadores('/')}>%</button>
      <button onClick={() => VerificarOperadores('x')}>x</button>
      <button onClick={() => VerificarOperadores('-')}>-</button>
      <button onClick={() => VerificarOperadores('+')}>+</button>
      <button onClick={() => VerificarOperadores('=')}>=</button>
      <p>{primeiroNumero}</p>
      <p>{operador}</p>
      <p>{segundoNumero}</p>
    </div>
      )
}
export default App
