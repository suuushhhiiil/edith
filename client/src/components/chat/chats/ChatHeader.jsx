import React from "react";
import styles from "./ChatHeader.module.scss";
import { Search, MoreVert } from "@mui/icons-material";
const ChatHeader = ({person}) => {
    return (
        <>
        <div 
        className={`${styles.Header}`}>
            <img 
            className={`${styles.Image}`}
            src={person.picture}
            alt="dp"
            />
            <div
            className={`${styles.Info}`}>
            
            <div
            className={`${styles.Name}`}
            >
                {person.name}
            </div>
            <div
            className={`${styles.Status}`}
            >
                Offline
                </div>
            </div>
            <div className={`${styles.Icons}`}>
                <Search/>
                <MoreVert/>
            </div>
        </div>
        </>
    )
}

export default ChatHeader;