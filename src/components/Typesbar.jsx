import React from 'react';
import SvgIcon from '../SvgIcon';
import useTypes from '../hooks/useTypes';

export const Typesbar = ({ toggleType }) => {
  const types = useTypes();

  return (
    <nav className="container w-[83%] lg:w-[45%] mx-52 mb-[30px] lg:mx-auto  rounded-full bg-slate-100 py-4  px-3 md:py-[1vw] md:px-[2vw] flex flex-wrap  lg:gap-3  justify-center shadow-xl shadow-slate-400 gap-2">
      {types?.map(({ name }) => {
        return (
          <a
            key={name}
            className={`rounded-full p-2 cursor-pointer scale-80 lg:scale-100  lg:hover:scale-125 transition duration-700 ease-out bg-${name}`}
            onClick={() => toggleType(name)}
          >
            <SvgIcon iconName={name} svgProp={{ width: 25, height: 25 }} />
          </a>
        );
      })}
    </nav>
  );
};
