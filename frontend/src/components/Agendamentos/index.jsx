import React from 'react';
import List from '../../components/List';

const Agendamentos = ({ history }) => {

  const columns = [
    {
      id: 'name',
      value: 'Nome',
    },
    {
      id: 'age',
      value: 'Idade',
    },
    {
      id: 'cpf',
      value: 'CPF',
    },
    {
      id: 'date',
      value: 'Data',
    },
    {
      id: 'action',
      value: 'Status',
      render: (_, user) => (
        <>
          <input
                className="m-2"
                type="checkbox"/>
            
        </>
      ),
    },
  ];

  return (
    <>   
    <List
      columns={columns}
      endpoint="/user"
    />
    </>
  );
};

export default Agendamentos;