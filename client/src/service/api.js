//import React from "react";
import axios from "axios";
const url = '';
export const addUser= async (data) => {
    try {
       await axios.post(url, data);
    } catch (error) {
        console.log("Error while adding user", error.message);
    }
}