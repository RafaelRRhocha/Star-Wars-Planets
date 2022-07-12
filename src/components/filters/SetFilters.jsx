import React, { useContext } from 'react';
import dataContext from '../../context/MyContext';

export default function SetFilters() {
  const {
    infosState,
    removeFilters,
    removeAllFilters,
  } = useContext(dataContext);

  return (
    <div data-testid="filter">
      <button
        disabled={ infosState.length < 1 }
        className="btn btn-outline btn-error"
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remove All Filters
      </button>
      {infosState.map(({ coluna, operador, input }, key) => (
        <div className="flex gap-3 items-center" key={ key }>
          <div className="flex gap-1 items-center">
            <p>{ coluna }</p>
            <p>{ operador }</p>
            <p>{ input }</p>
          </div>
          <button
            type="button"
            className="btn btn-circle btn-outline"
            data-testid="remove-filters"
            onClick={ () => removeFilters(coluna) }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
