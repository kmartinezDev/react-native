import axios from "axios";

export const reqReqApi = axios.create({
    baseURL: 'https://reqres.in/api'
})

