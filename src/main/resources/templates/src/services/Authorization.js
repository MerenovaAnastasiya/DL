import axios from 'axios';

const URL = 'http://localhost:8080';

class Authorization {

    register({login, password}) {
        return axios.post(`${URL}/users`,{login: login, password: password})
    }

    login({login, password}) {
        return axios.post(`${URL}/login`,{login: login, password: password})
    }
}

export default new Authorization();