const Pantalla = ({ valor, operacion }) => {
  return (
    <div className={`bg-neutral-950 p-2 mb-2 text-3xl text-right h-20`}>
      <p className="text-gray-300 text-2xl">{valor}</p>
      <p className="text-white mb-2">{operacion}</p>
    </div>
  );
};

export default Pantalla;