import React from "react";
import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import styles from "./Conversations.module.scss";
//Compnents import
import SingleConversation from "./SingleConversation";
import { Divider } from "@mui/material";
const Conversations = () => {
    const [users, setUsers] = useState([]);

    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        };
        fetchData();
    }, []);
    return (
        <>
            <div
                className={`${styles.Container}`}
            >
                {
                    users.map(user => (
                        user.sub !== account.sub &&  //to avoid displaying the logged in user's conversation
                        <>
                        <SingleConversation user = {user} /> 
                        <Divider className={`${styles.Divider}`}/>
                        </>
                    ))
                }
            </div>
        </>
    );
};

export default Conversations;
