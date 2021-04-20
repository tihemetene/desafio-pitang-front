import React from 'react';
import { Button } from 'react-bootstrap';
import List from '../List';
import api from '../../util/api'
import { toast } from 'react-toastify';

const Agendamentos = () => {

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