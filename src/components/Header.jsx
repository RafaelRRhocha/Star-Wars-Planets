import React, { useContext } from 'react';
import dataContext from '../context/MyContext';

export default function Header() {
  const { filterByName } = useContext(dataContext);

  return (
    <header>
      <div>
        <input
          data-testid="name-filter"
          onChange={ filterByName }
          type="text"
          placeholder="digite a sua pesquisa"
        />
      </div>
    </header>
  );
}
