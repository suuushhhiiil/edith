import React, { useEffect, useState, useContext } from "react";
import styles from "./SingleConversation.module.scss";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation, setConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";




const SingleConversation = ({user}) => {
    const { setPerson, account, newMessageFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({});

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub});
            setMessage({
                text: data?.message, timestamp : data?.updatedAt
                
            })
        }
        getConversationDetails();
    },[newMessageFlag] );

    return (
        <div 
        onClick={() => getUser()}
        className={`${styles.Container}`}>
            <div>
                <img
                src={user.picture}
                alt = "dp"
                className={`${styles.Image}`} />
            </div>
            <div className={`${styles.Component}`}>
            <div
            className={`${styles.userDetail}`}
            >
                <p
                className={`${styles.Name}`}
                >
                    {user.name}
                </p>
                {
                    message?.text && 
                    <p
                    
                className={`${styles.timestamp}`}
                    >
                        {formatDate(message?.timestamp)}
                    </p>
                }
            </div>
            <div>
                <p
                className={`${styles.newMessage}`}
                >
                        {message?.text?.includes('localhost') ? "media" : message.text}
                </p>
            </div>
            </div>
            
        </div>
    )
}
export default SingleConversation;