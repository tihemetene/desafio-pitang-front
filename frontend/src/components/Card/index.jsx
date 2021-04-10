import React from 'react'
import {Card} from 'react-bootstrap'
import '../../styles/global.css'

const CardInicial = ({title, content}) => (
    <Card className="card m-4" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Text>
                {content}
            </Card.Text>
            <Card.Link href="#">Acesso paciente</Card.Link>
            <Card.Link href="#">Acesso Enfermeiro</Card.Link>
        </Card.Body>
    </Card>
);

export default CardInicial;