import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import {Button} from 'react-bootstrap'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Informe o nome!')
    .min(2, 'Nome inválido')
    .max(100, 'Nome inválido'),
  cpf: Yup.string()
    .required('Informe o CPF!')
    .length(11, 'CPF inválido!'),
  idade: Yup.number()
    .required('Informe a idade')
    .max(200, 'Idade inválida.')
})

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ name: '', cpf: '', idade: '' }),
  handleSubmit: values => {
    console.log(values)
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'MyForm',
  validationSchema: schema
})

const FormTeste = props => {
  return (
    <Form>
      <div>
        <Field name="name" placeholder="Nome" /> <br />
        <ErrorMessage name="name" />
      </div>
      <div>
        <Field name="cpf" placeholder="CPF" />
        <br />
        <ErrorMessage name="cpf" />
      </div>
      <div>
        <Field name="idade" placeholder="Idade" />
        <br />
        <ErrorMessage name="idade" />
      </div>
      <Button type="submit">Enviar</Button>
    </Form>
  )
}

export default enhanceWithFormik(FormTeste)
