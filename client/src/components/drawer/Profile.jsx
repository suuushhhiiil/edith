import React, { useContext } from "react"; 
import { Typography } from "@mui/material";
import styles from "./Profile.module.scss";
import  "./Profile.module.scss";
import { AccountContext } from "../../context/AccountProvider";


const Profile = () => {
    const {account} = useContext(AccountContext)
    return (
        <>
            <div className={`${styles.PictureBox}`}>
                    <img 
                    className={`${styles.Picture}`}
                    src={account.picture}
                    alt="user profile"
                    />
                    
            </div>
            <div
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
            </div>
                <Typography
                    className={`${styles.Description}`}
                >
                   Your name as displayed in your Google Account.
                </Typography>
            <div
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
            </div>
            <div
             className={`${styles.LogOut}`}>
                <Typography>
                    Log Out
                </Typography>
                </div>
        </>
    );
};

export default Profile;
