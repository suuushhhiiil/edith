import React from "react";
import { useContext } from "react";
import styles from "./MessageSingle.module.scss";
import { formatDate } from "../../../utils/common-utils";
import {AccountContext} from "../../../context/AccountProvider";


const MessageSingle = ({message}) => {

    const { account } = useContext(AccountContext);

    return (
        <>
        {
            account.sub === message.senderId ? 
            <div
            className={`${styles.sentMessage}`}
            >
                <p
                className={`${styles.text}`}
                >
                {message.text}
                </p>
                <p
                id={`${styles.timeline}`}
                >
                {formatDate(message.createdAt)}
                </p>
                </div>
            :
                <div
                className={`${styles.receivedMessage}`}
                >
                <p
                className={`${styles.text}`}
                >
                {message.text}
                </p>
                <p
                id={`${styles.timeline}`}
                >
                {formatDate(message.createdAt)}
                </p>
                </div>
        }
        </>
        )
}

export default MessageSingle;