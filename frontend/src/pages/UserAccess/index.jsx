import React, { useState } from 'react'
import CardInicial from '../../components/Card'
import DatePicker from 'react-datepicker'
import { Formik } from 'formik'
import { Button, Container, Form } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'


const UserAcess = ({history}) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container className="mt-4 page-user">
            <CardInicial title="Agendamento do paciente">
                <Formik
                    initialValues={{ email: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label className="mr-4">CPF</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="___.___.___-__"
                                />
                                {errors.email && touched.email && errors.email}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className>Nome</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeHolder="Seu nome"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Idade</Form.Label>
                                <Form.Control 
                                type="age"
                                name="age"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                valeu={values.age}
                                placeHolder="Sua idade"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mr-2">Data da vacinação</Form.Label>
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </Form.Group>
                                <Button
                                    variant="success"
                                    type="submit"
                                    disabled={isSubmitting}>
                                    Cadastrar
                            </Button>
                            <a className="btn btn-secondary ml-2" href="/">Voltar</a>
                        </Form>
                    )}
                </Formik>
            </CardInicial>
        </Container>
    )
};

export default UserAcess;

