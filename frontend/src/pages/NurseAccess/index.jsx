import React from 'react'
import { Container } from 'react-bootstrap'
import CardInicial from '../../components/Card'

export default function index() {
    return (
        <Container className="mt-4">
            <CardInicial title="Acesso enfermeiro">
                alo
                <a className="btn btn-secondary" href="/">Voltar</a>
            </CardInicial>
        </Container>
    )
}
