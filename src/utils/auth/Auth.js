import axios from 'axios';
import { ROOT_URL } from '../root_url';

export { ROOT_URL };

export function loginUser(username, password) {
  return axios.post(`${ROOT_URL}/users/auth`, {
    username,
    password,
    headers: {
      authorization: localStorage.getItem('clientToken'),
    },
  })
    .then(response => response.data)
    .catch(error => error);
}
