import React, { useState, useContext } from 'react';
import dataContext from '../../context/MyContext';
import SetFilters from './SetFilters';

export default function FilterByNumber() {
  const { options, filterByNumberInfos, setInfosState } = useContext(dataContext);
  const [infos, setInfos] = useState({
    coluna: 'population',
    operador: 'maior que',
    input: 0,
  });
  const { coluna, operador, input } = infos;

  const onInputChange = ({ target: { name, value } }) => {
    setInfos((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex gap-3 items-center">
      <div className="flex gap-5 p-4">
        <select
          name="coluna"
          value={ coluna }
          onChange={ onInputChange }
          data-testid="column-filter"
          className="select w-sm max-w-xs bkgInputs"
        >
          {options.map((setOptions, i) => (
            <option key={ i }>{ setOptions }</option>
          ))}
        </select>
        <select
          name="operador"
          value={ operador }
          onChange={ onInputChange }
          data-testid="comparison-filter"
          className="select w-sm max-w-xs bkgInputs"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </div>
      <div className="flex gap-5">
        <input
          type="number"
          data-testid="value-filter"
          placeholder="digite o valor"
          onChange={ onInputChange }
          value={ input }
          name="input"
          className="input w-sm max-w-xs bkgInputs"
        />
        <button
          type="button"
          onClick={ () => {
            filterByNumberInfos(infos, setInfos);
            setInfosState((old) => [...old, infos]);
          } }
          data-testid="button-filter"
          className="btn btn-outline btn-success"
        >
          Filtrar
        </button>
      </div>
      <SetFilters />
    </div>
  );
}
