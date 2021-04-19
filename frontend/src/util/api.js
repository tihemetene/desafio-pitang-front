import axios from 'axios'

const { REACT_APP_API_BASE_URL } = process.env;

const myAxios = axios.create({
  baseURL: 'http://localhost:3333/api',
});

export default myAxios;