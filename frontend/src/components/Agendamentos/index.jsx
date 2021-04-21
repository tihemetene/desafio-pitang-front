import React from 'react';
import List from '../List';
import api from '../../util/api'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';

const Agendamentos = ( {history} ) => {

  const remove = async (user) =>{
    try{
      await api.delete(`/user/${user._id}`);
      toast.warn("Removido.")
    }catch(e){
      toast.error(e.message);
    }
  }

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
                <Button onClick={() => history.push(`/agendamento/${user._id}`)}>
            Editar
          </Button>
          <span onClick={() => remove(user)} variant="danger" className="ml-4">🗑</span>               
        </>
      ),
    },
  ];

  return (
    <List
      columns={columns}
      endpoint="/user"
    />
  );
};

export default Agendamentos;