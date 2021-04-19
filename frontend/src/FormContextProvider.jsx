import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import FormContext from './FormContext';
import axios from './util/api';

const FormContextProvider = ({ children}) =>{
  const [dados, setDados] = useState([]);

  const fetchDados = async () => {
    try{
      const response = await axios.get('/user');
      setDados(response.data.data);
    }catch(e){
      toast.error(e.message);
    }
  };

  useEffect(()=>{
    fetchDados();
  }, []);

  return (
    <FormContext.Provider value={[dados, setDados]}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;