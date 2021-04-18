import React, { useState, useEffect } from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import { withFormik, Field, ErrorMessage, Form } from 'formik'
import { Button } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import * as Yup from 'yup';
import axios from '../../util/api'
import br from 'date-fns/locale/pt-BR'

registerLocale("br", br)

const schema = Yup.object().shape({
    cpf: Yup.string()
        .required('Informe o CPF!').length(11, 'CPF inválido!'),
    name: Yup.string()
        .required('Nome obrigatório.')
        .min(1, 'Nome deve conter mais que um caractere.')
        .max(100, 'Nome deve conter menos que 100 caracteres'),
    age: Yup.date()
        .default(function () {return new Date();})
        .required('Inserção da idade é obrigatório.')
        .min('1/1/1900', 'Idade inválida')
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
    const [startDateAge, setStartDateAge] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    // const isNewUser = id === 'new';
    // const [form, setForm] = useState({
    //     cpf: '', 
    //     name: '', 
    //     age: '', 
    //     data :'',
    // })

    // useEffect(() => {
    //     if (!isNewUser) {
    //       fetchUser();
    //     }
    //   }, [id, isNewUser]);

    // const fetchUser = async () => {
    //     const response = await api.get(`/user/${id}`);
    //     setForm(response.data.user);
    //   };

    let dataAtual = new Date();
    let handleColor = time => {
        return time.getHours() >= 8 && time.getHours()  < 18 ? "text-success" : "text-muted";
      };


    return (
                <Form>
                    <div>
                        <span>CPF</span>
                        <br />
                        <Field
                            name="cpf"
                            placeholder="CPF"
                        />
                        <ErrorMessage className="ml-2" style={{color: "red"}} name="cpf" />
                    </div>
                    
                    <hr />
                    <div>
                        <span>Nome</span>
                        <br />
                        <Field
                            name="name"
                            placeHolder="Seu nome"
                        />
                        <ErrorMessage name="name" />
                    </div>
                    <hr />
                    <div>
                        <span>Idade</span>
                        <br />
                        <DatePicker
                        selected={startDateAge} 
                        onChange={date => setStartDateAge(date)}
                        locale={br} 
                        dateFormat="dd/MM/yyyy"  
                        showYearDropdown
                        showMonthDropdown/>
                    </div>
                    <hr />
                    <div>
                        <span className="mr-2">Data da vacinação</span>
                        <DatePicker 
                        selected={startDate}
                        onChange={date => setStartDate(date)} 
                        locale={br}                        
                        showTimeSelect                     
                        timeClassName={handleColor} 
                        minDate={dataAtual} 
                        dateFormat="dd/MM/yyyy HH'h'mm"
                        showYearDropdown
                        showMonthDropdown/>
                    </div>
                    <Button className="mt-3" variant="success" type="submit"> Cadastrar </Button>
                    <a className="btn btn-secondary ml-2 mt-3" href="/">Voltar</a>
                </Form>
    )
};

export default comFormik(MeuForm);

