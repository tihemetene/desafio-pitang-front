import * as Yup from 'yup';

export default Yup.object().shape({
  cpf: Yup.string()
      .required('Informe o CPF!')
      .length(11, 'CPF inválido!'),
  name: Yup.string()
      .required('Nome obrigatório.')
      .min(2, 'Nome deve conter mais que um caractere.')
      .max(50, 'Nome deve conter menos que 100 caracteres'),
  age: Yup.date()
      .required('Inserção da idade é obrigatório.')
      .nullable(),
  date: Yup.date()
      .required('Inserção da idade é obrigatório.')
      .nullable(),
})