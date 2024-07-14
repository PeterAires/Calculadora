import React, { useState } from 'react';
import './App.css';

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState('');
  const [operador, setOperador] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [resultado, setResultado] = useState('');
  const [historico, setHistorico] = useState([]);
  const [mostrarHistorico, setMostrarHistorico] = useState(false)

  const VerificarOperadores = (operador) => {
    primeiroNumero !== ''
      ? setOperador(operador)
      : window.alert('Por Favor, Digite um valor primeiro.');
  };

  const VerificarNumeros = (num) => {
    operador === ''
      ? setPrimeiroNumero(primeiroNumero + num)
      : setSegundoNumero(segundoNumero + num);
  };

  const Historico = (num1, num2, resultadoCalculado, operador) => {
    const HistoricoFinal = [num1, operador, num2, '=', resultadoCalculado];
    setHistorico([...historico, <div className='operadores'>{HistoricoFinal}</div>]);
  };

  const CalcularResultado = () => {
    if (segundoNumero === '') {
      window.alert('Faltou o Operador/Segundo');
      return;
    }

    let num1 = parseFloat(primeiroNumero);
    let num2 = parseFloat(segundoNumero);
    let resultadoCalculado = 0;
    switch (operador) {
      case '+':
        resultadoCalculado = num1 + num2;
        break;
      case '-':
        resultadoCalculado = num1 - num2;
        break;
      case 'x':
        resultadoCalculado = num1 * num2;
        break;
      case '%':
        resultadoCalculado = num1 / num2;
        break;
      default:
        break;
    }
    Historico(primeiroNumero, segundoNumero, resultadoCalculado, operador);
    setResultado(resultadoCalculado);
    setPrimeiroNumero(resultadoCalculado.toString());
    setOperador('');
    setSegundoNumero('');
  };

  const Apagar = () => {
    setResultado('');
    setPrimeiroNumero('');
    setSegundoNumero('');
    setOperador('');
  };

  return (
    <div className='display'>
      <div className='visor'>
      {primeiroNumero}
      {operador}
      {segundoNumero}
        
      </div>

      <button className='numero' onClick={() => VerificarNumeros(1)}>
        <h1>1</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(2)}>
        <h1>2</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(3)}>
        <h1>3</h1>
      </button>
      <button className='operador' onClick={() => VerificarOperadores('%')}>
        <h1>%</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(4)}>
        <h1>4</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(5)}>
        <h1>5</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(6)}>
        <h1>6</h1>
      </button>
      <button className='operador' onClick={() => VerificarOperadores('x')}>
        <h1>x</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(7)}>
        <h1>7</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(8)}>   
        <h1>8</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(9)}>
        <h1>9</h1>
      </button>
      <button className='operador' onClick={() => VerificarOperadores('-')}>
        <h1>-</h1>
      </button>
      <button className='numero' onClick={() => VerificarNumeros(0)}>
        <h1>0</h1>
      </button>
      <button className='limpar' onClick={() => Apagar()}>
        C
      </button>
      <button className='igual' onClick={() => CalcularResultado()}>
        <h1>=</h1>
      </button>
      <button className='operador' onClick={() => VerificarOperadores('+')}>
        <h1>+</h1>
      </button>
      <button onClick={() => setMostrarHistorico(true)}>
        History
      </button>

      
        {mostrarHistorico && (
          <div className='historico'>
            <button onClick={() => setMostrarHistorico(false)}>X</button>
              {historico.map((hist, index) => (
            <div key={index} className='operadores'>
              {hist}
            </div>
        ))}
          </div>
        )}
    
    </div>
  );
}

export default App;
