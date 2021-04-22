import React from 'react';
import List from '../ListagemAgendamentos';
import api from '../../util/api'
import '../../styles/global.css'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { BsTrash } from 'react-icons/bs'

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
      id: 'hour',
      value: 'Hora',
    },
    {
      id: 'action',
      value: 'Status',
      render: (_, user) => (
        <>
          <input
                className="m-2"
                type="checkbox"/>
          <BsTrash onClick={() => remove(user)} className="ml-4 mb-3 icons"></BsTrash>            
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