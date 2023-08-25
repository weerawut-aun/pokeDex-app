import { useDynamicSvgImport } from './useDynamicSvgImport';

import React from 'react';

const SvgIcon = ({ iconName, wrapperStyle, svgProp }) => {
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);
  return (
    <div>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && <SvgIcon {...svgProp} />}
    </div>
  );
};

export default SvgIcon;
