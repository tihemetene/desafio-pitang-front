import React, {useState} from 'react';
import List from '../ListagemAgendamentos';
import axios from '../../util/api';
import '../../styles/global.css';
import { toast } from 'react-toastify';
import { BsTrash } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io'

const Agendamentos = () => {
const [reloadCount, setReloadCount] = useState(0);

  const checkComplete = async (user) => {
      try{
        await axios.put(`/user/${user._id}`, {
          cpf: user.cpf,
          name: user.name,
          age: user.age,
          date: user.date,
          hour: user.hour,
          isIdoso: user.isIdoso,
          isAtendido: 'Vacinado',
        });
        setReloadCount(reloadCount + 1)
      }catch(e){
        toast.error('Falha ao marcar')
      }
    
  }

  const remove = async (user) =>{
    try{
      await axios.delete(`/user/${user._id}`);
      toast.warn("Removido.")
      setReloadCount(reloadCount + 1);
    }catch(e){
      toast.error('Falha ao remover');
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
      value: 'Data (MM-DD-YYYY)',
    },
    {
      id: 'hour',
      value: 'Hora',
    },
    {
      id: 'isAtendido',
      value: 'Status',
    },
    {
      id: 'status',
      value: '',
      render: (_, user) => (
        <>
          <IoMdAdd className="mt-2 icons" onClick={() => checkComplete(user)}/>
        </>
      ),
    }, 
    {
      id: 'action',
      value: 'Ações',
      render: (_, user) => (
        <>
          <a className="btn btn-outline-primary" href={`/agendamento/${user._id}`}>
            Nota
            </a>
          <BsTrash onClick={() => remove(user)} className="ml-4 mb-3 mt-3 icons"></BsTrash>            
        </>
      ),
    },
  ];

  return (
    <List
      reloadCount={reloadCount}
      columns={columns}
    />
  );
};

export default Agendamentos;