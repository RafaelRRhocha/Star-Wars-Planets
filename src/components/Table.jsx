import React, { useContext } from 'react';
import dataContext from '../context/MyContext';
import logo from '../logo.png';

export default function Table() {
  const { data } = useContext(dataContext);
  return (
    <div>
      {data.length < 1 ? <img src={ logo } alt="loading" /> : (
        <table>
          <thead>
            <tr>
              {Object.keys(data[1]).map((element, i) => (
                <th key={ i }>{element.replace('_', ' ')}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={ i }>
                <td>{e.name}</td>
                <td>{e.rotation_period}</td>
                <td>{e.orbital_period}</td>
                <td>{e.climate}</td>
                <td>{e.gravity}</td>
                <td>{e.terrain}</td>
                <td>{e.surface}</td>
                <td>{e.water}</td>
                <td>{e.population}</td>
                <td>{e.films}</td>
                <td>{e.created}</td>
                <td>{e.edited}</td>
                <td>{e.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
