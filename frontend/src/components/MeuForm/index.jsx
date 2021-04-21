import React, { useState } from 'react'
import DatePicker, {registerLocale} from 'react-datepicker'
import { useFormik, Formik } from 'formik'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/global.css'
import * as Yup from 'yup';
import axios from '../../util/api'
import br from 'date-fns/locale/pt-BR'

registerLocale("br", br)


const MeuForm = () => {
    const [age, setAge] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const formik = useFormik({
        initialValues: {
          cpf: '',
          name: '',
          age:  '',
          date: '',
        }, 
        validationSchema: Yup.object({
          cpf: Yup.string()
            .max(11, 'Must be 15 characters or less')
            .min(11, 'CPF inválido')
            .required('Required'),
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Campo Obrigatório'),
        }),
        onSubmit: values => {
          values["age"] = age;
          values["date"] = date;  
          console.log(values)
          try{
            axios.post('/user', values);
            toast.success('Paciente agendado!')
          }catch(error){
           toast.warn('ops')
          }
          alert(JSON.stringify(values));
        },
       });
       console.log(age)

    let handleColor = time => {
        return time.getHours() >= 8 && time.getHours()  < 18 ? "text-success" : "text-muted";
      };


    return (
        <Formik>
            {({ values, setFieldValue })=>(
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <span>CPF</span>
                        <br />
                        <input
                             id="cpf"
                             name="cpf"
                             type="text"
                             placeholder="CPF"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.cpf}
                        />
                        {formik.touched.cpf && formik.errors.cpf ? (
                        <div>{formik.errors.cpf}</div>
                        ) : null} 
                    </div>                    
                    <hr />
                    <div>
                        <span>Nome completo</span>
                        <br />
                        <input
                             id="name"
                             name="name"
                             type="text"
                             placeholder="Seu nome aqui"
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                        ) : null}  
                    </div>
                    <hr />                   
                    <div>
                        <span>Idade</span>
                        <br />
                        <DatePicker
                        name="age"
                        selected={age} 
                        onChange={date => setAge(date)}
                        locale={br} 
                        dateFormat="dd/MM/yyyy"  
                        showYearDropdown
                        scrollableYearDropdown
                        showMonthDropdown
                        />
                    </div>
                    <hr />
                    <div>
                        <span className="mr-2">Data da vacinação</span>
                        <DatePicker
                        name="date" 
                        selected={date}
                        onChange={date => setDate(date)} 
                        locale={br}                        
                        showTimeSelect                     
                        timeClassName={handleColor} 
                        minDate={new Date()} 
                        dateFormat="dd/MM/yyyy HH'h'mm"                       
                        />
                    </div>
                    <Button className="mt-3" variant="success" type="submit"> Agendar </Button>
                    <a className="btn btn-secondary ml-2 mt-3" href="/">Voltar</a>
                </form>
                )}
                </Formik>
                );
};

export default MeuForm;

