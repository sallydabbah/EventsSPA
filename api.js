import React from 'react';
import axios from "axios";


export const getUsers = () => {
  
 //   return axios.get('users.json');
 return JSON.parse(localStorage.getItem('users'));
} 
export const getWishes = (userID) => {
  
    //   return axios.get('users.json');
    console.log(userID+'from get wishes api ');
    return JSON.parse(localStorage.getItem('userWishes'));
   } 