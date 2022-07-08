import { useState, useEffect } from 'react';

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  const makeFetch = async () => {
    const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const jsonRequest = await api.json();
    setResponse(jsonRequest.results.filter((item) => delete item.residents));
    setLoading(false);
  };

  useEffect(() => {
    makeFetch();
  }, []);
  return { response, loading };
};
export default useFetch;
