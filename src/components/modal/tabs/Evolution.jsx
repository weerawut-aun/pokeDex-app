import React from 'react';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import useEvolution from '../../../hooks/useEvolution';

const Evolution = () => {
  const { currentPokemon } = usePokemonModal();
  const chain = useEvolution(currentPokemon.id);
  return (
    <>
      {!chain.length ? (
        <strong>This Pokémon doesn't Evolve</strong>
      ) : (
        chain.map((evolution) => {
          const { current, next } = evolution;

          return (
            <div
              className="flex justify-around m-0  mb-[4.5vh] last:m-0 items-center capitalize text-black"
              key={next.name}
            >
              <div className="text-center">
                <div className="flex relative  w-[25vw] md:w-[10vw] h-[25vw] md:h-[10vw]">
                  <div className="pokeball-bg  w-full top-0 left-0 after:h-full after:bg-slate-100 after:right-1"></div>
                  <img
                    src={current.image}
                    alt="pokemon-image"
                    className="w-[65%] mx-auto my-0 z-10"
                  />
                </div>
                <span className="font-medium capitalize">{current.name}</span>
              </div>
              <a>
                <box-icon
                  name="right-arrow-alt"
                  size="md"
                  color="black"
                ></box-icon>
              </a>
              <div className="text-center">
                <div className="flex relative  w-[25vw] md:w-[10vw] h-[25vw] md:h-[10vw]">
                  <div className="pokeball-bg  w-full top-0 left-0 after:h-full after:bg-slate-100 after:right-1"></div>
                  <img
                    src={next.image}
                    alt="pokemon-image"
                    className="w-[65%] mx-auto my-0 z-10"
                  />
                </div>
                <span className="font-medium capitalize">{next.name}</span>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
export default Evolution;
