import axios from 'axios';

const http = axios.create({
    baseURL: 'https://localhost:7237/Schedules/',
});

export default http