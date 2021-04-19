import React from 'react'
import { Container } from 'react-bootstrap'
import CardInicial from '../../components/Card'
import Agendamentos from '../../components/Agendamentos'

export default function index() {
    return (
<Container className="mt-4">
      <CardInicial title="Lista de agendamentos">
                <a className="btn btn-secondary ml-2 mb-2" href="/">Voltar</a>
                <Agendamentos />
            </CardInicial>
        </Container>
    )
}
