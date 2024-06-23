import React, { useContext } from "react"; 
import { Box, Typography } from "@mui/material";
import styles from "./Profile.module.scss";
import  "./Profile.module.scss";
import { AccountContext } from "../../context/AccountProvider";


const Profile = () => {
    const {account} = useContext(AccountContext)
    return (
        <>
            <Box className={`${styles.Picture}`}>
                    <img 
                    className={`${styles.Picture}`}
                    src={account.picture}
                    alt="user profile"
                    />
                    
            </Box>
            <Box
            className={`${styles.Wrapper}`}>
                <Typography
                    className={`${styles.Label}`}
                >
                    Your Name
                </Typography>
                <Typography
                    className={`${styles.Value}`}
                >
                    {account.name}
                </Typography>
            </Box>
                <Typography
                    className={`${styles.Description}`}
                >
                   Your name as displayed in your Google Account.
                </Typography>
            <Box
             className={`${styles.Wrapper}`}>
                <Typography
                    className={`${styles.Label}`}
                >
                    About
                </Typography>
                <Typography
                    className={`${styles.Value}`}
                >
                    Always keep coding!
                </Typography>
            </Box>
            <Box
             className={`${styles.LogOut}`}>
                <Typography>
                    Log Out
                </Typography>
                </Box>
        </>
    );
};

export default Profile;
