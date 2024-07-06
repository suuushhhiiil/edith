import { Dialog, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import styles from "./LogInDIalog.module.scss";
import { addUser } from "../../service/api";


const LogInDialog = () => {
  const { setAccount } = useContext(AccountContext);

  //to keep user logged in
useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if(storedAccount){
      setAccount(JSON.parse(storedAccount));
    }
   },[setAccount]);

  const logInSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    localStorage.setItem("account", JSON.stringify(decoded)); //to keep user logged in
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
      <div 
      className={`${styles.dialogBoxOuter}`}>
        <div id="logIn" sx={{ padding: "20px" }}>
          <Typography
            textAlign={"center"}
            sx={{
              margin: "20px",
            }}
          >
            Log in to Edith!
          </Typography>
          <div
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GoogleLogin onSuccess={logInSuccess} onError={logInError} />
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default LogInDialog;
