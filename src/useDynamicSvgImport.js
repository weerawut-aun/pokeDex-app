import React, { useEffect, useRef, useState } from 'react';

export const useDynamicSvgImport = (iconName) => {
  const importedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async () => {
      try {
        importedIconRef.current = (
          await import(`./assets/type-icons/${iconName}.svg`)
        ).ReactComponent;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    importSvgIcon();
  }, [iconName]);
  return { error, loading, SvgIcon: importedIconRef.current };
};
