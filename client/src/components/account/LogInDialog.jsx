import { Dialog, Box, Typography } from "@mui/material";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import styles from "./LogInDIalog.module.scss";
import { addUser } from "../../service/api";


const LogInDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const logInSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };
  const logInError = (res) => {
    console.log("Log In Error!", res);
  };
  return (
    <Dialog 
    open={true} 
    className={`${styles.Dialog}`}
    hideBackdrop={true}>
      <Box 
      className={`${styles.dialogBoxOuter}`}>
        <Box id="logIn" sx={{ padding: "20px" }}>
          <Typography
            textAlign={"center"}
            sx={{
              margin: "20px",
            }}
          >
            Log in to Edith!
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GoogleLogin onSuccess={logInSuccess} onError={logInError} />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
export default LogInDialog;
