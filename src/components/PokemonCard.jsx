import React from 'react';
import SvgIcon from '../SvgIcon';
import { usePokemonModal } from '../context/PokemonModalProvider';
import { getTypeIconSrc } from '../utils/pokemon-help';

export const PokemonCard = ({
  pokemon,
  pokemon: { paddedId, name, types, imgSrc },
}) => {
  const { openModal } = usePokemonModal();
  return (
    <div
      className={`relative w-full lg:w-[30%]  flex  justify-between  py-3 px-8 lg:p-6 rounded-lg  h-52 shadow-2xl shadow-current card ${types[0].name} bg-current md:hover:scale-110`}
      onClick={() => openModal(pokemon)}
    >
      <div className="flex flex-col justify-center  leading-normal ">
        <span className="text-sm font-bold text-current">{'#' + paddedId}</span>
        <h1 className="text-4xl text-white font-bold capitalize">{name}</h1>
        <div className="flex gap-1">
          {types.map(({ name }) => {
            return (
              <span
                key={name}
                className={`text-sm font-medium text-white rounded-md bg-${name} p-1 capitalize flex pokemons-center gap-1 items-center`}
              >
                <SvgIcon iconName={name} svgProp={{ width: 10, height: 10 }} />
                {name}
              </span>
            );
          })}
        </div>
      </div>
      <div className="pokeball-bg"></div>
      <img
        src={imgSrc}
        alt="pokemon-image"
        className="relative bottom-[20%] object-cover h-40 md:h-41 md:pl-4"
      />
    </div>
  );
};
