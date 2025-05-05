import './App.css';
import freeCodeCampLogo from "./images/freecodecamp-logo.png"
import Boton from "./componentes/Boton"
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () => {
    //esta es mi funcion para calcular Resultado y abajo coloco la solucion refactor de chatgpt que queria ver
    if (input) {
      if (/[+\-*/]/.test(input)){
        let matches = input.match(/[+\-*/]/g);
        if (matches && matches.length > 1){
          alert("solo puedes ingresar un simbolo matematico");
        }else{
          if(/^\s*\d+\s*[+\-*/]\s*\d+\s*$/.test(input)){
            setInput(evaluate(input));
          }else{
            alert("recuerda ingresar un numero con el cual hacer la operacion");
          }
        }
      }else{
        alert("recuerda ingresar un simbolo para la operacion")
      }
    }else{
      alert("porfavor ingrese valores para realizar los calculos")
    }

    //if (!input) {
    //  alert("Por favor ingrese valores para realizar los cálculos");
    //  return;
    //}
  
    //const operadores = input.match(/[+\-*/]/g);
  
    //if (!operadores) {
    //  alert("Recuerda ingresar un símbolo para la operación");
    //  return;
    //}
  
    //if (operadores.length > 1) {
    //  alert("Solo puedes ingresar un símbolo matemático");
    //  return;
    //}
  
    //const operacionValida = /^\s*\d+\s*[+\-*/]\s*\d+\s*$/.test(input);
  
    //if (!operacionValida) {
    //  alert("Recuerda ingresar un número con el cual hacer la operación");
    //  return;
    //}
  
    //setInput(evaluate(input));
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt="logo de freeCodecamp" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={ calcularResultado }>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput("")}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
