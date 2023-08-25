import React from 'react';
import { PokemonCard } from './PokemonCard';
import usePokemons from '../hooks/usePokemons';

const PokemonContainer = ({ type }) => {
  const pokemons = usePokemons(type);
  return (
    <div className=" px-10 md:px-0 flex flex-col w-full md:flex-row md:flex-wrap justify-center gap-7 md:gap-9 ">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};
export default PokemonContainer;
