import React from 'react'
import CardInicial from '../../components/Card'
import { Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import MeuForm from '../../components/MeuForm'


const UserAcess = ({history}) => {

    return (
        <Container className="mt-4 page-user">
            <CardInicial title="Agendamento do paciente">
                <MeuForm />
            </CardInicial>
        </Container>
    )
};

export default UserAcess;

