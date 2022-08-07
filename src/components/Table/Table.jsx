import React, { useContext } from 'react';
import myContext from '../../context/MyContext';
import './style.css';

export default function Table() {
  const { filterByName, planet, loading } = useContext(myContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            // tive ajuda do rafael para implementar o filter aqui e nao global
            loading === false
            && planet.filter((planets) => planets.name.includes(filterByName.name))
              .map((item, index) => (
                <tr key={ index }>
                  <td>{item.name}</td>
                  <td>{ item.rotation_period }</td>
                  <td>{ item.orbital_period }</td>
                  <td>{ item.diameter }</td>
                  <td>{ item.climate }</td>
                  <td>{ item.gravity }</td>
                  <td>{ item.terrain }</td>
                  <td>{ item.surface_water }</td>
                  <td>{ item.population }</td>
                  <td>{ item.films }</td>
                  <td>{ item.created }</td>
                  <td>{ item.edited }</td>
                  <td>{ item.url }</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}
