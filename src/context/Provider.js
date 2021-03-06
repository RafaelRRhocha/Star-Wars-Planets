import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import dataContext from './MyContext';

function Provider({ children }) {
  const { response, loading } = useFetch();
  const [data, setData] = useState([]);
  const [infosState, setInfosState] = useState([]);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const filterByName = (value) => (value === ''
    ? setData(response)
    : setData(response.filter((item) => item.name.includes(value))));

  const filterByNumberInfos = (value, setInfosFunc) => (value.coluna === 'population'
    && value.operador === 'maior que'
    && value.input === 0
    ? (
      setData(response.filter((item) => item.population !== 'unknown'))
    )
    : (setData(
      data.filter((item) => {
        if (value.operador === 'igual a') {
          return Number(item[value.coluna]) === Number(value.input);
        }
        if (value.operador === 'maior que') {
          return Number(item[value.coluna]) > Number(value.input);
        }
        return Number(item[value.coluna]) < Number(value.input);
      }),
    ),
    setOptions(options.filter((coluna) => coluna !== value.coluna)),
    setInfosFunc({
      coluna: 'population',
      operador: 'maior que',
      input: 0,
    })));

  const removeFilters = (value) => {
    setData(response);
    setOptions([...options, value]);
    const setNewFilter = infosState.filter((e) => e.coluna !== value);
    setInfosState(setNewFilter);
    setNewFilter.forEach((e) => {
      filterByNumberInfos(e);
    });
  };

  const removeAllFilters = () => {
    setInfosState([]);
    setData(response);
    setOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  };

  useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response]);

  const finishRequestApi = {
    loading,
    data,
    options,
    filterByNumberInfos,
    filterByName,
    infosState,
    setInfosState,
    removeFilters,
    removeAllFilters,
  };

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
