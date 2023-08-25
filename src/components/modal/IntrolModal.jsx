import React from 'react';
import { usePokemonModal } from '../../context/PokemonModalProvider';
import SvgIcon from '../../SvgIcon';

export const IntrolModal = () => {
  const { closeModal, currentPokemon } = usePokemonModal();

  return (
    <div className="pt-[6vw] md:pt-[3vw] pr-[6vw] md:pr-[3vw] pb-0 pl-[6vw] md:pl-[3vw]">
      <a onClick={closeModal}>
        <box-icon name="left-arrow-alt" size="md" color="white"></box-icon>
      </a>
      <div className="flex items-center  md:justify-center">
        <img
          src={currentPokemon.imgSrc}
          alt="dewgong"
          className="mr-6 w-[50%] md:w-20 lg:w-40"
        />
        <div className="w-60 flex flex-col ">
          <span className="text-md font-semibold text-slate-700">
            #{currentPokemon.paddedId}
          </span>
          <span className="text-4xl text-white capitalize font-bold">
            {currentPokemon.name}
          </span>
          <div className="flex gap-2">
            {currentPokemon.types.map(({ name }) => {
              return (
                <div
                  className={`flex items-center bg-${name} rounded-md p-1 gap-1`}
                  key={name}
                >
                  <SvgIcon
                    iconName={name}
                    svgProp={{ width: 10, height: 10 }}
                  />

                  <span className="text-white text-sm">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
