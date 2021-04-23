import React from 'react'
import CardInicial from '../../components/Card'
import { Container, Image, Button } from 'react-bootstrap'
import feno from '../../Assets/Images/feno.gif'


export default function index({history}) {
  return (
    <>
      <Container className="mt-4">
      <CardInicial className="center" title="404">
        <h1>Ops... Não há nada aqui :(</h1>
        <Image className="center" rounded src={feno} />
        <Button onClick={() => history.push('/')}>Voltar ao início</Button>
        </CardInicial>      
      </Container>
    </>
  )
}
