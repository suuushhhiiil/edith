import React from "react";
import { useContext } from "react";
import styles from "./SingleConversation.module.scss";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/api";




const SingleConversation = ({user}) => {
    const { setPerson, account } = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }

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
            <div>
                <p
                className={`${styles.Name}`}
                >
                    {user.name}
                </p>
            </div>
        </div>
    )
}
export default SingleConversation;