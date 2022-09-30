import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { authToken } from './Atoms/atom';

const token = useRecoilValue(authToken);
const instance = axios.create({
  baseURL: 'http://13.125.85.216:8080',
  Authorization: `Bearer ${token}`,
});

export default instance;
