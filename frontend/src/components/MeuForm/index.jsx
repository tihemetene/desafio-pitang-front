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
import moment from 'moment'
registerLocale("br", br)


 function idade(dateString) {
   var today = new Date();
   var birthDate = new Date(dateString);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
       age--;
   }
   return age;
 }

 function isIdoso(age){
   if(age > 59){
     return true
   }else{
     return false;
   }
 }

const MeuForm = () => {
    const [age, setAge] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(new Date());   

    const formik = useFormik({
        initialValues: {
          cpf: '',
          name: '',
          age:  '',
          date: '',
          hour: '',
        }, 
        validationSchema: Yup.object({
          cpf: Yup.string()
            .matches((/^\d+$/), 'CPF inválido')
            .max(11, 'CPF inválido')
            .min(11, 'CPF inválido')
            .required('Campo obrigatório'),
          name: Yup.string()
            .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 'Campo nome não permite símbolos diferentes de letras')
            .min(2, 'Campo nome deve conter no mínimo 2 caracteres')
            .max(50, 'Campo nome deve conter no máximo 50 caracteres')
            .required('Campo obrigatório'),
          age: Yup.string(),  
          date: Yup.string(),
          hour: Yup.string(), 
        }),
        onSubmit: async (values) => {
          const response = await axios.get(`/agendamentos/${moment(date).format('DD-MM-YYYY')}/${moment(hour).format('h:mm a')}`);
          const { data } = response.data;
          if (data >= 2){
            toast.warning("Limite de agendamentos nesse horário.")
          }else{
            const response = await axios.get(`/agendamentos/${moment(date).format('DD-MM-YYYY')}`);
            const { data } = response.data;
            if (data >= 20){
              toast.warning("Foi alcançado o limite de 20 agendamentos nesse dia.");            
            }else{
              try{          
                  await axios.post('/user', {
                  cpf: formik.values.cpf,
                  name: formik.values.name,
                  age: idade(age),
                  date: moment(date).format('DD-MM-YYYY'),
                  hour: moment(hour).format('h:mm a'),
                  isIdoso: isIdoso(idade(age)),
                  isAtendido: 'Não vacinado',
                  note: '',
                });
                toast.success('Paciente cadastrado com sucesso!');
              }catch(error){
               toast.error('Erro ao agendar. Verifique se o CPF já não foi cadastrado.')
              }            
            }
          }
        },
       });

    return (
        <Formik>
            {()=>(
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
                        <div style={{ color: "red" }}>{formik.errors.cpf}</div>
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
                        <div style={{ color: "red" }}>{formik.errors.name}</div>
                        ) : null}  
                    </div>
                    <hr />                   
                    <div>
                        <span>Data de nascimento</span>
                        <br />
                        <DatePicker
                        name="age"
                        selected={age}  
                        onChange={date => setAge(date)}
                        locale={br} 
                        dateFormat="dd/MM/yyyy"
                        maxDate={(new Date())}  
                        showYearDropdown                      
                        showMonthDropdown
                        withPortal
                        dropdownMode="select"
                        />
                        {formik.touched.age && formik.errors.age ? (
                        <div style={{ color: "red" }}>{formik.errors.age}</div>
                        ) : null}  
                    </div>
                    <hr />
                    <div>
                        <span className="mr-2">Data e hora da vacinação</span>
                        <DatePicker
                        name="date" 
                        selected={date}
                        onChange={date => setDate(date)} 
                        locale={br}                                            
                        minDate={new Date()} 
                        dateFormat="dd/MM/yyyy"
                        withPortal                       
                        />
                        {formik.touched.date && formik.errors.date ? (
                        <div style={{ color: "red" }}>{formik.errors.date}</div>
                        ) : null}
                    </div>
                    <div className="mt-1">
                    <DatePicker
                        name="hour"
                        selected={hour} 
                        onChange={hour => setHour(hour)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={60} 
                        dateFormat="h:mm"
                        withPortal
                        />
                        {formik.touched.hour && formik.errors.hour ? (
                        <div style={{ color: "red" }}>{formik.errors.hour}</div>
                        ) : null}
                    </div>
                    <hr />   
                    <Button className="mt-3" variant="success" type="submit"> Agendar </Button>
                    <a className="btn btn-outline-secondary ml-2 mt-3" href="/">Voltar</a>
                </form>
                )}
                </Formik>
                );
                
};

export default MeuForm;

