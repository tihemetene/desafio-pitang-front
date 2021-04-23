import React, {useState} from 'react';
import List from '../ListagemAgendamentos';
import MeuModal from '../Modal';
import api from '../../util/api';
import '../../styles/global.css';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { BsTrash } from 'react-icons/bs';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import axios from 'axios';

const Agendamentos = ( event ) => {
const [modalShow, setModalShow] = useState(false);
const [check, setCheck] = useState(false)

  const checkComplete = async (user) => {
    setCheck(true);
    const res = await api.get(`/user/${user._id}`);
    try{
      await api.put(`/user/${user._id}`, {
        cpf: res.data.cpf,
        name: res.data.name,
        age: res.age.age,
        date: res.data.date,
        hour: res.data.hour,
        isIdoso: res.data.isIdoso,
        isAtendido: true,
      });
      setCheck(false)
      alert('marcado')
    }catch(e){
      toast.error('Falha ao marcar')
    }
  }

  const remove = async (user) =>{
    try{
      await api.delete(`/user/${user._id}`);
      toast.warn("Removido.")
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
      value: 'Data',
    },
    {
      id: 'hour',
      value: 'Hora',
    },
    {
      id: 'status',
      value: 'Status',
      render: (_, user) => (
        <>
        {check ? (
          <ImCheckboxUnchecked onClick={() => checkComplete(user)}/>
        ) : <ImCheckboxChecked onClick={() => checkComplete(user)}/>}
          <Button
                className="m-2"
                type="checkbox"
                onClick={() => checkComplete(user)}>teste</Button>
        </>
      ),
    }, 
    {
      id: 'action',
      value: 'Ações',
      render: (_, user) => (
        <>
                <Button onClick={() => setModalShow(true)}>
            Edit
          </Button>
          <MeuModal title="Comentar agendamento" show={modalShow} />
          <BsTrash onClick={() => remove(user)} className="ml-4 mb-3 mt-3 icons"></BsTrash>            
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