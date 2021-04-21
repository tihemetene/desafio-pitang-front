import React, {useState} from 'react';
 import { useFormik, Formik }  from 'formik';
 import * as Yup from 'yup';
 import axios from '../../util/api'
 import { toast } from 'react-toastify'
 import DatePicker, {registerLocale} from 'react-datepicker'
 import "react-datepicker/dist/react-datepicker.css";
 import br from 'date-fns/locale/pt-BR'
 registerLocale("br", br)
 
 const SignupForm = () => {
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
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       name: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
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
    
   return (
     <Formik>
       {({ values, setFieldValue })=> (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="cpf">cpf</label>
       <input
         id="cpf"
         name="cpf"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.cpf}
       />
       {formik.touched.cpf && formik.errors.cpf ? (
         <div>{formik.errors.cpf}</div>
       ) : null} 
       <label htmlFor="name">nome</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.name}
       />
       {formik.touched.name && formik.errors.name ? (
         <div>{formik.errors.name}</div>
       ) : null}  
       <label>idade</label>
       {/* <DatePicker
          selected={age}
          name="age"
          onChange={date => setAge(date)}
           dateFormat="dd-MM-yyyy"
           placeholderText="dd-mm-yyyy"  
           scrollableYearDropdown
           showYearDropdown
           scrollableMonthDropdown
           showMonthDropdown
           setFieldValue={formik.values.age}
           />              */}
           <DatePicker 
           name="age"
           selected={age}
           onChange={date => setAge(date)}
           />
           <label>Data do agendamento</label>
           <DatePicker 
           name="date"
           selected={date}
           onChange={date => setDate(date)}
           />
       <button type="submit">Submit</button>
     </form>
     )}
     </Formik>
   );
 };

 export default SignupForm;