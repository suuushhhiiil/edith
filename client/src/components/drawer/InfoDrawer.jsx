import React from "react";
import { Drawer, Box, Typography, } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import styles from "./InfoDrawer.module.scss";
import Profile from "./Profile";

const drawerStyle = {
    left: 8,
    top: 8,
    width: "30%",
    height: "98%",
    boxShadow: "none",
    minWidth: 320,
    borderRadius: "8px"
};
const InfoDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Drawer
                open={open}
                onClose={() => handleClose()}
                PaperProps={{ sx: drawerStyle }}
            >
                <Box
                    className={`${styles.Header}`}
                >
                    <ArrowBack 
                        className={`${styles.ArrowBack}`}
                        onClick={() => setOpen(false)}
                    />
                    <Typography
                        className={`${styles.ProfileTitle}`}
                    >
                        Profile
                    </Typography>
                </Box>
                <Box 
                    className={`${styles.Container}`}
                >
                    <Profile/>
                </Box>
            </Drawer>
        </>
    );
};

export default InfoDrawer;
