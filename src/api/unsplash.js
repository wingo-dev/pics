import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID wYq9yfzbsNxGc7orouQsIp6wngkBmhp4tFrZ1IydfHU'
    }   
});