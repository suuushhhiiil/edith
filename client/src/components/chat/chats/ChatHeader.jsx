import React from "react";
import styles from "./ChatHeader.module.scss";
import { Search, MoreVert } from "@mui/icons-material";
import { useContext } from "react";
import {AccountContext} from "../../../context/AccountProvider";




const ChatHeader = ({person}) => {


    const {activeUsers} = useContext(AccountContext);
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
                {activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}
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