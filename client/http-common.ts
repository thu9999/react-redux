import Axios from 'axios';

const URL = 'http://localhost:8080/';

export default Axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json'
    }
})