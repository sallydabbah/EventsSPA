import axios from "axios";

export const getUsers = () => {
  
 //   return axios.get('users.json');
 return JSON.parse(localStorage.getItem('users'));
} 