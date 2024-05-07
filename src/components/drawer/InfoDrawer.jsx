import React from "react";
import { Drawer, styled, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import styles from "./InfoDrawer.module.scss";


const InfoDrawer = ({open, setOpen}) => {
const handleClose = ()=>{
    setOpen(false);
}
    return (
        <>
       <Drawer
            open={open}
            onClose={handleClose}
            className={`${styles.InfoDrawer}`}
       >
        <Box>
            
        </Box>
        <Box>

        </Box>
       </Drawer>
        </>
    )
}

export default InfoDrawer;