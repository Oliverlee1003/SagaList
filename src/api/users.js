import axios from 'axios';
export const getUser = () => {
    // 2nd as configuration object
    return axios.get('/users', {
        params: {
            limits: 1000
        }
    })
};