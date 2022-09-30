import axios from 'axios';
import { getCookie } from '../Pages/LoginPage';

const instance = axios.create({
  baseURL: 'http://13.125.85.216:8080',
  headers: { Authorization: `Bearer ${getCookie('authToken')}` },
});

export default instance;
