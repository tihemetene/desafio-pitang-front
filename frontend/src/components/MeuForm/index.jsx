import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { withFormik, Field, ErrorMessage, Form } from 'formik'
import { Button } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import * as Yup from 'yup';

const schema = Yup.object().shape({
    cpf: Yup.string()
        .required('Informe o CPF!').length(11, 'CPF inválido!'),
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
})

const MeuForm = props => {
    const [startDate, setStartDate] = useState(new Date());
    return (
                <Form method="POST">
                    <div>
                        <span>CPF</span>
                        <Field
                            name="cpf"
                            placeholder="CPF"
                        />
                        <ErrorMessage name="cpf" />
                    </div>
                    <hr />
                    <div>
                        <span>Nome</span>
                        <Field
                            name="name"
                            placeHolder="Seu nome"
                        />
                        <ErrorMessage name="name" />
                    </div>
                    <hr />
                    <div>
                        <span>Idade</span>
                        <Field
                            name="age"
                            placeHolder="Sua idade" />
                            <ErrorMessage name="age" />
                    </div>
                    <hr />
                    <div>
                        <span className="mr-2">Data da vacinação</span>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </div>
                    <Button className="mt-3" variant="success" type="submit"> Cadastrar </Button>
                    <a className="btn btn-secondary ml-2 mt-3" href="/">Voltar</a>
                </Form>
    )
};

export default comFormik(MeuForm);

