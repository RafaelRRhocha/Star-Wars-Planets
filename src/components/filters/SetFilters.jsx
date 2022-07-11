import React, { useContext } from 'react';
import dataContext from '../../context/MyContext';

export default function SetFilters() {
  const { infosState, removeFilters } = useContext(dataContext);

  return (
    <div data-testid="filter">
      {infosState.map((element, key) => (
        <div className="flex gap-3 items-center" key={ key }>
          <div className="flex gap-1 items-center">
            <p>{ element.coluna }</p>
            <p>{ element.operador }</p>
            <p>{ element.input }</p>
          </div>
          <button
            type="button"
            data-testid="button-remove-filters"
            className="btn btn-circle btn-outline"
            value={ element.coluna }
            onClick={ ({ target: { value } }) => removeFilters(value) }
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
