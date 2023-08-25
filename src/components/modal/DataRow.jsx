import React from 'react';

const DataRow = ({ catergory, value, max }) => {
  return (
    <tr>
      <td className="font-semibold pr-14 capitalize text-black">{catergory}</td>
      <td className="px-4 text-black">{value}</td>
      {max && (
        <td className="rounded-full w-8/12 h-1.5">
          <div
            className="range-slide-fill "
            style={{ width: (value / max) * 100 + '%' }}
          ></div>
        </td>
      )}
    </tr>
  );
};
export default DataRow;
