import axios from "axios";


export const setTwkkToken=(username, password)=>{
    return axios.post('http://localhost:3000/auth',{username,password})

}