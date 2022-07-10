import React, { useState, useContext } from 'react';
import dataContext from '../../context/MyContext';

export default function FilterByNumber() {
  const { options, filterByNumberInfos } = useContext(dataContext);
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
          {options.map((setOptions) => (
            <option key={ setOptions }>{ setOptions }</option>
          )) }
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
          onClick={ () => filterByNumberInfos(infos, setInfos) }
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
