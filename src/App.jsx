import './App.css'
import { useState } from "react"

function App(){

  const [primeiroNumero,setPrimeiroNumero] = useState('')
  const [operador,setOperador] = useState('')
  const [segundoNumero,setSegundoNumero] = useState('')
  const [resultado,setResultado] = useState('')
  const [historico,setHistorico] = useState([])
  const [mostrarHisto,setMostrarHisto] = useState(false)


  const VerificarOperadores = (operador) => {
    primeiroNumero !== '' ?
    setOperador(operador)
    : 
    window.alert('Por Favor, Digite um valor primeiro.')

  }

  const VerificarNumeros = (num) => {
    operador === '' ?
    setPrimeiroNumero(primeiroNumero + num)
    :
    setSegundoNumero(segundoNumero + num)
    
  }

  const Historico = (num1,num2,resultadoCalculado) => {
    setHistorico([...num1,num2,resultadoCalculado])
  }
  
  const CalcularResultado = () => {
    if (segundoNumero === '') {
      window.alert('Faltou o Operador/Segundo')
      return
    }

    let num1 = parseFloat(primeiroNumero)
    let num2 = parseFloat(segundoNumero)
    let resultadoCalculado = 0
    switch (operador) {
      case '+':
        resultadoCalculado = num1 + num2
        break;
      case '-':
        resultadoCalculado = num1 - num2
        break
      case 'x':
        resultadoCalculado = num1 * num2
        break
      case '%':
        resultadoCalculado = num1 / num2
        break
      default:
        break;
    }
    setResultado(resultadoCalculado)
    setPrimeiroNumero(resultadoCalculado)
    setOperador('')
    setSegundoNumero('')

    Historico(num1,num2,resultadoCalculado)
  }



  const Apagar = () => {
    setResultado('')
    setPrimeiroNumero('')
    setSegundoNumero('')
    setOperador('')
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
    <button onClick={() => VerificarOperadores('%')}>%</button>
    <button onClick={() => VerificarOperadores('x')}>x</button>
    <button onClick={() => VerificarOperadores('-')}>-</button>
    <button onClick={() => VerificarOperadores('+')}>+</button>
    <button onClick={() => CalcularResultado('=')}>=</button>
    <button onClick={() => Apagar()}>C</button>
    <button onClick={setMostrarHisto(true)}>Historico</button>
    
    <p>{primeiroNumero}</p>
    <p>{operador}</p>
    <p>{segundoNumero}</p>

    {resultado && (<div>
      {resultado}
    </div>)}
    {mostrarHisto &&}
  </div>)
  }
  
export default App
