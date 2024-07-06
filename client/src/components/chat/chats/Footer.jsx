import React from "react";
import styles from "./Footer.module.scss";

//Components import
import AttachFile from '@mui/icons-material/AttachFile';
import Emoji from '@mui/icons-material/EmojiEmotionsOutlined';
import Mic from '@mui/icons-material/MicOutlined';
import Send from '@mui/icons-material/Send';
import { InputBase } from "@mui/material";
const Footer = () =>{
    return (
        <>
        <div
        className={`${styles.Footer}`}>
        <div
        className={`${styles.Wrapper}`}>
            <Emoji
            className={`${styles.Icon}`}
            />
            <AttachFile
            className={`${styles.Icon}`}
            />
            <div>
              <InputBase 
              className={`${styles.Input}`}
              fullWidth
              placeholder="Type a message"
              />  
            </div>
            <Mic
            className={`${styles.Icon} `}
            />           
        </div>
        </div>
        </>
    )
}

export default Footer;