import React from 'react';
import DataRow from '../DataRow';
import { usePokemonModal } from '../../../context/PokemonModalProvider';

import { getTypeIconSrc } from '../../../utils/pokemon-help';

const About = () => {
  const { currentPokemon } = usePokemonModal();
  return (
    <>
      <h4 className="text-current font-medium">Pokédex Data</h4>
      <table className="table-fixed  w-full ">
        <tbody>
          <DataRow catergory={'height'} value={currentPokemon.height} />
          <DataRow catergory={'weight'} value={currentPokemon.weight} />
          <tr className="text-black">
            <td className="font-semibold pr-14">Abilities</td>
            <td className="px-4">
              <ol className="list-decimal">
                {currentPokemon.abilities.map(({ ability, is_hidden }) => {
                  if (is_hidden) {
                    return (
                      <small key={ability.name}>
                        {ability.name} (hidden ability)
                      </small>
                    );
                  }
                  return <li key={ability.name}>{ability.name}</li>;
                })}
              </ol>
            </td>
          </tr>
          <tr className="text-black">
            <td className="font-semibold pr-14">Types</td>
            <td className="px-4">
              {currentPokemon.types.map(({ name }) => {
                const typeImage = getTypeIconSrc(name);
                return (
                  <img
                    key={name}
                    src={typeImage}
                    alt="name"
                    className={`bg-${name} w-5 mr-1 p-1 rounded-sm inline`}
                  />
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default About;
