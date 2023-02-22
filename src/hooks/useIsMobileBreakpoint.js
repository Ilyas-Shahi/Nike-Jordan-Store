import { useEffect, useState } from 'react';

const useIsMobileBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    checkScreenSize();

    if (screenSize < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [screenSize]);

  return isMobile;
};
export default useIsMobileBreakpoint;
