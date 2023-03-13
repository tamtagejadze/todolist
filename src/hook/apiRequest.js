import axios from "axios"

export default function apiRequest(method,endpoint){
    return axios({
        url: 'https://dummyjson.com/' + endpoint,
        method
    })
    .then(response => response.data.todos)

}