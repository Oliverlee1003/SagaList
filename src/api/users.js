import axios from 'axios';
export const getUser = () => {
    // 2nd as configuration object
    return axios.get('/users', {
        params: {
            limits: 1000
        }
    })
};

export const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,
        lastName
    })
};

export const deleteUser = ({userId}) => {
    return axios.delete(`/users/${userId}`, {
        userId,
    })
};