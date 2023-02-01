import { useEffect, useState } from 'react';

const useFetch = (query) => {
  const [data, setData] = useState(null);

  let PROJECT_ID = '6tbteecs';
  let DATASET = 'production';

  let QUERY = encodeURIComponent(`${query}`);

  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);

      const data = await response.json();

      setData(data);
    };

    fetchData();
    console.log('effect ran');
  }, [URL]);

  return [data];
};

export default useFetch;
