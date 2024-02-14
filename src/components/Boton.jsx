const Boton = ({ valor, funcion, handleClick }) => {
  return (
    <button
      className={`${funcion == 'numero' ? ' bg-gray-200 :text-black hover:bg-slate-300' : 'bg-gray-900 text-yellow-500'} text-black rounded-md text-2xl font-bold py-2 px-3 hover:scale-95 transition-all`}
      onClick={() => handleClick(valor)}
    >
      {valor}
    </button>
  );
};

export default Boton;