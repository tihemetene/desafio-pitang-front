import React from 'react'
import CardInicial from '../../components/Card'
import { Card, Container, Row } from 'react-bootstrap'

const Home = () =>
(
    <Container className="mt-4">
        <CardInicial
            title="Central de vacinação para o COVID-19"
        >
            <Card.Body>
                <Row>
                    <span>Bem vindo ao portal MediHouse para o agendamento da vacinação!</span>
                </Row>
                <Row>
                    <Card.Link href="/user-access">Acesso paciente</Card.Link>
                    <Card.Link href="/nurse-access">Acesso Enfermeiro</Card.Link>
                </Row>
            </Card.Body>
        </CardInicial>
    </Container>
);

export default Home;