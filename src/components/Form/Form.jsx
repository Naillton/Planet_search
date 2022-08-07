import React, { useContext, useState } from 'react';
import myContext from '../../context/MyContext';

const options = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Form() {
  const { filtraNumber } = useContext(myContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState('0');
  const [columns, setColumns] = useState([...options]);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'selection') {
      setColumn(value);
    }
    if (name === 'operador') {
      setComparison(value);
    }
    if (name === 'valor') {
      setNumber(value);
    }
  };

  const handleClick = () => {
    filtraNumber({ comparison, column, number });
    const obj = { column, comparison, number };
    setColumns(columns.filter((item) => !item.includes(obj.column)));
  };

  return (
    <div>
      <form>
        <select
          name="selection"
          data-testid="column-filter"
          onChange={ handleChange }
          value={ column }
        >
          {
            columns.map((option) => (
              <option key={ option }>{ option }</option>
            ))
          }
        </select>
        <label htmlFor="operador">
          Operador:
          <select
            name="operador"
            data-testid="comparison-filter"
            onChange={ handleChange }
            value={ comparison }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            name="valor"
            value={ number }
            onChange={ handleChange }
            data-testid="value-filter"
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </div>
  );
}
