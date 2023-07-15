import axios from 'axios';

const baseUrl = 'http://localhost:3000/users';



const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials);
}

const register = (userDetails) => {
    return axios.post(`${baseUrl}/`, userDetails);
}

const getUser = () => {

    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/`, config);
}

const getUserById = () => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.get(`${baseUrl}/profile`,config);
}
const updatePassword = (password) => {
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` }
    };
    return axios.put(`${baseUrl}/${window.localStorage.getItem('id')}`, {password}, config);
}

export default { login, register, getUser ,getUserById, updatePassword};