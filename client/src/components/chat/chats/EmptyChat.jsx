
import { Box } from "@mui/material";
import React from "react";
import styles from "./EmptyChat.module.scss";
const EmptyChat =()=>{
    return(
        <Box
        className={`${styles.Container}`}
        >
            <Box>
                Select a chat to continue!
            </Box>
        </Box>
    )
}

export default EmptyChat;