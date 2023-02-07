import { useEffect, useState } from 'react';

const useScrollTrigger = (triggerPosition) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= triggerPosition) {
        setTriggered(true);
      } else {
        setTriggered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPosition]);

  return triggered;
};

export default useScrollTrigger;
