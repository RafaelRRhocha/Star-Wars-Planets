import React, { useContext } from 'react';
import dataContext from '../context/MyContext';
import logo from '../logo.png';
import Header from './Header';
import '../App.css';

export default function Table() {
  const { loading, data } = useContext(dataContext);
  return (
    <div>
      {/* <img src="https://wallpaperaccess.com/full/7590862.jpg" className="bg-cover" alt="imagem de fundo" /> */}
      <Header />
      {loading ? <img src={ logo } alt="loading" /> : (
        <div className="p-5 overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                {data.length ? (
                  Object.keys(data[0]).map((element, i) => (
                    <th key={ i } className="bkgInputs">{element}</th>
                  ))
                ) : (
                  <p>O que você procurou não existe</p>
                )}
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((e, i) => (
                  <tr key={ i } className="bkgInputs">
                    <td data-testid="planet-name">{e.name}</td>
                    <td>{e.rotation_period}</td>
                    <td>{e.orbital_period}</td>
                    <td>{e.diameter}</td>
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
                ))
              ) : (
                <p>O que você procurou não existe</p>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
