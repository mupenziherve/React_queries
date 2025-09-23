import axios from 'axios'

const customeFetch = axios.create({
  baseURL: 'http://localhost:5000/api/tasks',
});

export default customeFetch;