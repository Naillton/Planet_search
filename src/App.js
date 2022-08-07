import React from 'react';
import MyProvider from './context/MyProvider';
import Table from './components/Table/Table';
import Input from './components/Input/Input';
import Form from './components/Form/Form';

function App() {
  return (
    <MyProvider>
      <Input />
      <Form />
      <Table />
    </MyProvider>
  );
}

export default App;
