import React from "react";
import styles from "./SingleConversation.module.scss";
const SingleConversation = ({user}) => {
    return (
        <div className={`${styles.Container}`}>
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