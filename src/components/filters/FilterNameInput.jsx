import React, { useContext } from 'react';
import dataContext from '../../context/MyContext';

export default function FilterNameInput() {
  const { filterByName } = useContext(dataContext);

  return (
    <input
      data-testid="name-filter"
      onChange={ ({ target: { value } }) => filterByName(value) }
      type="text"
      placeholder="digite a sua pesquisa"
    />
  );
}
