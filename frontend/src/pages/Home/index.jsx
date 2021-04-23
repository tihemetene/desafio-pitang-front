import React from 'react'
import CardInicial from '../../components/Card'
import { Card, Container, Row, Image } from 'react-bootstrap'

const Home = () =>
(
    <Container className="mt-4">
        <CardInicial
            title="Central de vacinação para o COVID-19"
        >
            <Card.Body>
                <Row>
                    <h4>Bem vindo ao portal MediHouse para o agendamento da vacinação! Escolha a opção abaixo caso queira realizar um 
                        agendamento ou caso seja um enfermeiro.</h4>
                </Row>
                <Image src="https://www.keckmedicine.org/wp-content/uploads/2020/12/covid-vaccine.png"></Image>
                <Row>
                    <Card.Link href="/agendamento/new">Acesso paciente</Card.Link>
                    <Card.Link href="/agendamento">Acesso Enfermeiro</Card.Link>
                </Row>
            </Card.Body>
        </CardInicial>
    </Container>
);

export default Home;