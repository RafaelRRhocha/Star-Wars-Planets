import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import dataContext from './MyContext';

function Provider({ children }) {
  const { response, loading } = useFetch();
  const [data, setData] = useState([]);

  const filterByName = ({ target: { value } }) => (
    value !== '' ? (
      setData(response.filter((item) => item.name.includes(value)))
    ) : (
      setData(response)
    )
  );

  useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response]);

  const finishRequestApi = { loading, data, filterByName };

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
