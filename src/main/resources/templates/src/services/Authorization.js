import axios from 'axios';
import {URL} from './constants';

export const Authorization = {

    register: ({login, password}) => {
        return axios.post(`${URL}/users`, {login: login, password: password})
    },
    login: ({login, password}) => {
        return axios.post(`${URL}/login`, {login: login, password: password})
    }
};