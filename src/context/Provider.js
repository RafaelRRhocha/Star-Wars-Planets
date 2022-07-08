import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import dataContext from './MyContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  const makeFetch = async () => {
    const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const jsonRequest = await api.json();
    const jsonResults = jsonRequest.results.filter((item) => delete item.residents);
    setData(jsonResults);
  };

  useEffect(() => {
    makeFetch();
  }, []);

  const finishRequestApi = { data };

  return (
    <dataContext.Provider value={ finishRequestApi }>
      {children}
    </dataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
