import axios from 'axios';

const url = "http://localhost:8000/api";
let token = "7hQi6p7wQk9qT1mdDihFw8lmaDwxIWrU9PQbwkvl";

export const link = axios.create({
    baseURL : url,
    headers : {
        'api_token' : token,
    }
});