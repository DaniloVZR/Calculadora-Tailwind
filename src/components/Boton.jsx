const Boton = ({ valor, funcion, handleClick }) => {
  return (
    <button
      className={`${funcion == 'numero' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-yellow-500'} text-black rounded-md text-2xl py-2 px-3 font-bold`}
      onClick={() => handleClick(valor)}
    >
      {valor}
    </button>
  );
};

export default Boton;