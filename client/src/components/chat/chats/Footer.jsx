import React from "react";
import styles from "./Footer.module.scss";
import { useEffect } from "react";
import { uploadFile } from "../../../service/api";

//Components import
import AttachFile from '@mui/icons-material/AttachFile';
import Emoji from '@mui/icons-material/EmojiEmotionsOutlined';
import Mic from '@mui/icons-material/MicOutlined';
import { InputBase } from "@mui/material";


const Footer = ({sendText, setValue, value, file, setFile, setImage }) =>{

//file Upload
    useEffect(() => {
        const getImage = async () => {
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    },[file, setImage]);

    

    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }


    
    return (
        <>
        <div
        className={`${styles.Footer}`}>
            <Emoji
            className={`${styles.Icon}`}
            />
            <label
            htmlFor="fileInput">
            <AttachFile
            className={`${styles.Icon}`}
            id={`${styles.AttachFile}`}
            />
            </label>

            <input 
            type="file"
            id="fileInput"
            style = {{display:"none"}}            
            onChange={(e) => onFileChange(e)}
            />


            <div
                className={`${styles.InputDiv}`}
            >
              <InputBase 
              fullWidth
              placeholder = "Type a message & press enter to send"
              onChange = {(e) => setValue(e.target.value)} //Message typed in input field is retrieved here
              onKeyDown = {(e) => sendText(e)}
              value = {value}
              />  
            </div>
            <Mic
            className={`${styles.Icon} `}
            /> 
        </div>
        </>
    )
}

export default Footer;