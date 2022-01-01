import config from '@app/config.json';
import axios from 'axios'

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps {
  email: string
  name: string
  password: string
}

export const login = (body: LoginProps) => {
  axios.post(`${config.baseURL}/auth/login`, body).then(res => res)
}

export const register = (body: RegisterProps) => {
  axios.post(`${config.baseURL}/auth/register`, body).then(res => res)
}