import React, { useState } from 'react'
import CardInicial from '../Card'
import DatePicker from 'react-datepicker'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import { Button, Container } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    cpf: Yup.string()
        .required('Informe o CPF!').length(11),
    name: Yup.string()
        .required('Nome obrigatório.')
        .min(1, 'Nome deve conter mais que um caractere.')
        .max(100, 'Nome deve conter menos que 100 caracteres'),
    age: Yup.number()
        .required('Inserção da idade é obrigatório.')
        .positive()
        .integer()
})


const comFormik = withFormik({
    mapPropsToValues: () => ({ cpf: '', name: '', age: '' }),
    handleSubmit: values => {
        console.log(values)
    },
    isInitialValid: false,
    validateOnChange: true,
    validateOnBlur: true,
    displayName: 'Formik',
    validationSchema: schema
});

const MeuForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <Container className="mt-4 page-user">
            <CardInicial title="Agendamento do paciente">
                <Form action="handleSubmit">
                    <Form.Group>
                        <Form.Label className="mr-4">CPF</Form.Label>
                        <Field
                            name="cpf"
                            placeholder="___.___.___-__"
                        />
                        <ErrorMessage name="cpf" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className>Nome</Form.Label>
                        <Form.Control
                            name="name"
                            placeHolder="Seu nome"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control
                            name="age"
                            placeHolder="Sua idade"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mr-2">Data da vacinação</Form.Label>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </Form.Group>
                    <Button
                        variant="success"
                        type="submit"
                    >Cadastrar
                            </Button>
                    <a className="btn btn-secondary ml-2" href="/">Voltar</a>
                </Form>
            </CardInicial>
        </Container>
    )
};

export default comFormik(MeuForm);

