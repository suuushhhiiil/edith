import React from "react";
import styles from "./EmptyChat.module.scss";
const EmptyChat =()=>{
    return(
        <div
        className={`${styles.Container}`}
        >
            <div>
                Select a chat to continue!
            </div>
        </div>
    )
}

export default EmptyChat;