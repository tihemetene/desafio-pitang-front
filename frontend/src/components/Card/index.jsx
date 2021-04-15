import React from 'react'
import { Card } from 'react-bootstrap'
import '../../styles/global.css'

const CardInicial = ({ title, children }) => {
    return (
        <Card>
                <Card.Header>
                <Card.Title>
                    {title}
                </Card.Title>
                </Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}

export default CardInicial;