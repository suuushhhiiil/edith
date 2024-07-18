//import React from "react";
import axios from "axios";
const url = "http://localhost:8080";
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

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log("Error while calling setConversation API ", error.message); 
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling getConversation API ", error.message); 
    }
}



export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("Error while calling newMessage API", error.message);
    }
}


export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getMessage API", error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data,
            {
                headers: {
                    "Content-Type": "multipart/form-data"                
            }
            });
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.log("Error response data:", error.response.data);
            console.log("Error response status:", error.response.status);
            console.log("Error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.log("Error request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error message:", error.message);
        }
        console.log("Error config:", error.config);
    }
};