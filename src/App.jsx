import { useState } from "react";
import Pantalla from "./components/Pantalla";
import Boton from "./components/Boton";

function App() {
  const [valor, setValor] = useState('');
  const [operacion, setOperacion] = useState('');

  const teclear = (valor) => {
    if (operacion.length >= 10) return

    setOperacion(operacion + valor);
  }

  const borrarUltimo = () => {
    setOperacion(operacion.slice(0, operacion.length - 1));
  }

  const clearAll = () => {
    setValor('');
    setOperacion('');
  }

  const resultado = () => {
    try {
      setValor(eval(operacion));
    } catch (error) {
      setValor("SyntaxError");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen font-mono">
      <div className="bg-slate-700 p-3 rounded-md">
        <Pantalla
          valor={valor}
          operacion={operacion}
        />
        <div className="flex gap-2 mb-3">
          <Boton valor='Delete' handleClick={borrarUltimo} />
          <Boton valor='Clear All' handleClick={clearAll} />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Boton valor='7' funcion={'numero'} handleClick={teclear} />
          <Boton valor='8' funcion={'numero'} handleClick={teclear} />
          <Boton valor='9' funcion={'numero'} handleClick={teclear} />
          <Boton valor='/' handleClick={teclear} />
          <Boton valor='4' funcion={'numero'} handleClick={teclear} />
          <Boton valor='5' funcion={'numero'} handleClick={teclear} />
          <Boton valor='6' funcion={'numero'} handleClick={teclear} />
          <Boton valor='*' handleClick={teclear} />
          <Boton valor='1' funcion={'numero'} handleClick={teclear} />
          <Boton valor='2' funcion={'numero'} handleClick={teclear} />
          <Boton valor='3' funcion={'numero'} handleClick={teclear} />
          <Boton valor='-' handleClick={teclear} />
          <Boton valor='0' funcion={'numero'} handleClick={teclear} />
          <Boton valor='.' funcion={'numero'} handleClick={teclear} />
          <Boton valor='=' handleClick={resultado} />
          <Boton valor='+' handleClick={teclear} />
        </div>
      </div>
    </div>
  )
}

export default App
