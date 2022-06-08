import axios from "axios"

const api = axios.create({
    baseURL : 'https://dummyapi.io/data/v1',
    headers: {
        'Content-Type': 'application/json',
        'app-id': '627b956fb058dc4fa16fa1b9'
    }        
    
});


export default api;