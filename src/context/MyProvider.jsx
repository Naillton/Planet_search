import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const MyProvider = ({ children }) => {
  const [planet, setPlanet] = useState([]);
  const [filtred, setFiltred] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const Request = async () => {
      const { results } = await fetch(URL).then((response) => response.json());
      setPlanet(results);
      setFiltred(results);
      setLoading(false);
    };
    Request();
  }, []);

  const filtraNumber = ({ column, comparison, number }) => {
    const result = planet.filter((item) => {
      if (comparison === 'maior que') return item[column] > Number(number);
      if (comparison === 'menor que') return item[column] < Number(number);
      return item[column] === number;
    });
    setPlanet(result);
    setFilterByNumericValues({ result, ...filterByNumericValues });
  };

  return (
    <MyContext.Provider
      value={
        { planet,
          loading,
          filtred,
          filterByName,
          setFilterByName,
          filterByNumericValues,
          setFilterByNumericValues,
          filtraNumber }
      }
    >
      {children}
    </MyContext.Provider>
  );
};
MyProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
export default MyProvider;
