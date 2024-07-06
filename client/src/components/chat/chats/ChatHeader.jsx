import React from "react";
import styles from "./ChatHeader.module.scss";
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/data";

const ChatHeader = () => {
    return (
        <>
        <div 
        className={`${styles.Header}`}>
            <img 
            className={`${styles.Image}`}
            src={defaultProfilePicture}
            alt="dp"
            />
            <div
            className={`${styles.Info}`}>
            <div
            className={`${styles.Name}`}
            >Name</div>
            <div
            className={`${styles.Status}`}
            >Online Status</div>
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