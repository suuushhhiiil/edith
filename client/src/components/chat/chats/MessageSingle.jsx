import React from "react";
import { useContext } from "react";
import styles from "./MessageSingle.module.scss";
import { formatDate, downloadMedia } from "../../../utils/common-utils";
import {AccountContext} from "../../../context/AccountProvider";
import FileDownloadIcon from '@mui/icons-material/FileDownload';



const iconPDF = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png';
const MessageSingle = ({message}) => {

    const { account } = useContext(AccountContext);

    return (
        <>
        {
            account.sub === message.senderId ? 
            <div
            className={`${styles.sentMessage}`}
            >
                {
                    message.type === "file" ? <ImageMessage message ={message} /> : <TextMessage message={message} />
                }
                </div>
            :
                <div
                className={`${styles.receivedMessage}`}
                >
                {
                    message.type === "file" ? <ImageMessage message ={message} /> : <TextMessage message={message} />
                }
                </div>
        }
        </>
        )
}
const ImageMessage = ({message}) => {
    return (
        <>
        <div
        className={`${styles.imageMessage}`}>
            {
                message?.text?.includes(".pdf") ? 
                <div style={{display: "flex"}}>
                    <img src = {iconPDF} alt="pdf" style={{width: "80px"}}/>
                    <p style={{fontSize: "14px"}}>{message.text.split("/").pop()}</p>
                </div>
                :
                <img style={{width: 300, height:"100%", objectFit:"cover"}} src = {message.text} alt = {message.text} />
            }
                 <p
                        id={`${styles.imageTimeline}`}
                    >
                    <FileDownloadIcon 
                        onClick={(e) => downloadMedia(e, message.text)}
                        className={`${styles.fileDownloadIcon}`}
                    />
                {formatDate(message.createdAt)}
                </p>
                
        </div>
        </>
    )
}
const TextMessage = ({message}) => {
    return (
        <>
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
        </>
    )
}

export default MessageSingle;