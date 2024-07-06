//import React from "react";
import axios from "axios";
const url = 'http://localhost:8000';
export const addUser= async (data) => {
    try {
       await axios.post(`${url}/add`, data); //to wait for response
    } catch (error) {
        console.log("Error while adding user", error.message);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getUsers API ", error.message);
    }
}