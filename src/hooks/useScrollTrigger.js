import { useEffect, useState } from 'react';

const useScrollTrigger = (triggerPosition) => {
  const [triggered, setTriggered] = useState(window.scrollY >= triggerPosition);

  useEffect(() => {
    const handleScroll = () => {
      setTriggered(window.scrollY >= triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPosition]);

  return triggered;
};

export default useScrollTrigger;
