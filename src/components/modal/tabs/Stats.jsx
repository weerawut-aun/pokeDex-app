import React from 'react';
import DataRow from '../DataRow';
import { usePokemonModal } from '../../../context/PokemonModalProvider';
import { formatStats } from '../../../utils/pokemon-help';
const Stats = () => {
  const { currentPokemon } = usePokemonModal();
  const stats = formatStats(currentPokemon.stats);
  return (
    <div>
      <h4 className="text-current font-medium">Base Stats</h4>
      <table className="table-fixed ">
        <tbody>
          {stats.map((stat) => {
            const { name, value, max } = stat;

            return (
              <DataRow key={name} catergory={name} value={value} max={max} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Stats;
