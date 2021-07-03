import axios from 'axios'

const local = 'http://192.168.0.110:3001'
const deployed = 'https://shonenplaysmobile-api.herokuapp.com'

const instance = axios.create({
  baseURL: local,
})

export default instance
