import React from 'react'
import { Container } from 'react-bootstrap'
import CardInicial from '../../components/Card'
import ListaPacientes from '../../components/ListaPacientes'

export default function index() {
    return (
        <Container className="mt-4">
            <CardInicial title="Acesso enfermeiro">
                <ListaPacientes />
                <a className="btn btn-secondary" href="/">Voltar</a>
            </CardInicial>
        </Container>
    )
}
