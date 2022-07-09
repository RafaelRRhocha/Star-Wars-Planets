import React, { useState, useContext } from 'react';
import dataContext from '../../context/MyContext';

export default function FilterByNumber() {
  const { filterByNumberInfos } = useContext(dataContext);
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
    <div>
      <div>
        <select
          name="coluna"
          value={ coluna }
          onChange={ onInputChange }
          data-testid="column-filter"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          name="operador"
          value={ operador }
          onChange={ onInputChange }
          data-testid="comparison-filter"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </div>
      <div>
        <input
          type="number"
          data-testid="value-filter"
          placeholder="digite o valor"
          onChange={ onInputChange }
          value={ input }
          name="input"
        />
        <button
          type="button"
          onClick={ () => filterByNumberInfos(infos) }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
