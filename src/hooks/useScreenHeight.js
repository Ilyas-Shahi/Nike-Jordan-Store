import { useLayoutEffect, useState } from 'react';

const useScreenHeight = () => {
  const [screenHeight, setScreenHeight] = useState(0);

  useLayoutEffect(() => {
    function updateScreenHeight() {
      setScreenHeight(window.scrollY);
    }
    window.addEventListener('scroll', updateScreenHeight);
    updateScreenHeight();

    return () => window.removeEventListener('scroll', updateScreenHeight);
  }, []);

  return screenHeight;
};

export default useScreenHeight;
