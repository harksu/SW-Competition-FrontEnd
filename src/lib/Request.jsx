import axios from 'axios';
import { getCookie } from '../Pages/LoginPage';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: `Bearer ${getCookie('authToken')}` },
});

export default instance;
