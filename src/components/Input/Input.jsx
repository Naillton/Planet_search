import React, { useContext } from 'react';
import myContext from '../../context/MyContext';

function Input() {
  const { filterByName, setFilterByName } = useContext(myContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilterByName({ ...filterByName, name: value });
  };

  return (
    <label htmlFor="search">
      Search Planet
      <input
        type="text"
        placeholder="Search"
        id="search"
        name="search"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ handleChange }
      />
    </label>
  );
}

export default Input;
