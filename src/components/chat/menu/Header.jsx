import { Box, styled } from "@mui/material";
import React from "react";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import styles from "./Header.module.scss";
import InfoDrawer from "../../drawer/InfoDrawer";


const Header=()=>{
    const {account}= useContext(AccountContext);
    const [openDrawer, setOpenDrawer]=useState(false);
    const toggleDrawer = () =>{
        setOpenDrawer(true);
    }
    return (
        <>
        <Box className={`${styles.Component}`}>
            <Box
            className={`${styles.Image}`}
            onClick={()=> toggleDrawer()}
            />
            <Box
            className={`${styles.ImageBox}`}/>
            <Box 
            className={`${styles.Wrapper}`}>
                <MessageIcon/>
                <HeaderMenu/>
            </Box>    
        </Box>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}


export default Header;