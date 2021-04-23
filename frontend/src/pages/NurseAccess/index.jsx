import React from 'react'
import { Container, Button } from 'react-bootstrap'
import CardInicial from '../../components/Card'
import Agendamentos from '../../components/Agendamentos'

export default function index( {history} ) {
    return (
<Container className="mt-4">
      <CardInicial title="Lista de agendamentos">
                <Button variant="secondary" className="ml-2 mb-2" onClick={()=> history.push('/')}>Voltar</Button>
                <Agendamentos />
            </CardInicial>
        </Container>
    )
}
