/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import CardInicial from '../../components/Card'
import { Button, Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import axios from '../../util/api'
import MeuForm from '../../components/MeuForm'
import { toast } from 'react-toastify';


const UserAcess = ({history, match: {params: {id}}}) => {
const [form, setForm] = useState({
    note: '',
})

const isNewAgendamento = id === 'new';

const fetchAgendamento = async () => {
    const res = await axios.get(`/user/${id}`);
    setForm(res.data.user);   
}

useEffect(() => {
if(!isNewAgendamento){
    fetchAgendamento();
}
}, [id, isNewAgendamento]);

const onSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get(`/user/${id}`);
    try{
        await axios.put(`/user/${id}`, {
            cpf: res.data.cpf,
            name: res.data.name,
            age: res.data.age,
            date: res.data.date,
            hour: res.data.hour,
            isAtendido: res.data.isAtendido,
            isIdoso: res.data.isIdoso,
            note: form.note,
        })
        toast.info('Nota adicionada')
    }catch(e){
        toast.warning('Falha ao adicionar nota')
    }
}

const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
};

    return (
        <Container className="mt-4 page-user">
            <CardInicial title={isNewAgendamento ? 'Agendamento' : 'Adicionar/Editar nota'}>
                {isNewAgendamento ? <MeuForm /> : <>
                <form onSubmit={onSubmit}>
                <textarea 
                className="form-control" 
                rows="3"
                name="note"                
                placeholder="Nota"
                onChange={onChange}
                value={form.note}
                ></textarea>
                <Button type="submit" className="mt-2">Adicionar comentário</Button>
                <Button className="mt-2 ml-2" variant="outline-secondary" onClick={() => history.push("/agendamento")}>Voltar</Button>
                </form>
                </>}
            </CardInicial>
        </Container>
    )
};

export default UserAcess;

