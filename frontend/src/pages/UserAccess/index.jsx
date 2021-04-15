import React, { useState } from 'react'
import CardInicial from '../../components/Card'
import { Button, Container, Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import { Formik } from 'formik'


const UserAcess = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Container className="mt-4">
            <CardInicial title="Agendamento" content="">
                <Formik
                    initialValues={{ email: '', password: '' }}
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
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Idade</Form.Label>
                                <Form.Control></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Data da vacinação</Form.Label>
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </Form.Group>
                                <Button
                                    variant="success"
                                    type="submit"
                                    disabled={isSubmitting}>
                                    Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </CardInicial>
        </Container>
    )
};

export default UserAcess;

