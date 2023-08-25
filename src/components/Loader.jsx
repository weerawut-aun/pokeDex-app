import React from 'react';
export const getPokemonball = (img) => `./src/assets/${img}.svg`;
const Loader = () => {
  const pokeBall = getPokemonball('pokeball');
  return (
    <div className="fixed w-full top-[30%] flex flex-col items-center ">
      <span className="animate-ping absolute inline-flex h-80 w-80 rounded-full bg-red-500 opacity-75"></span>

      <img src={pokeBall} alt="pokemonball" className=" h-80 w-80 opacity-75" />
    </div>
  );
};
export default Loader;
