import axios from 'axios';
import {URL} from './constants';

export const BookService = {

    find: ({string}) => {
        return axios.post(`${URL}/books`, {identificator: string})
    }
};