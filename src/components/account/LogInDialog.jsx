import { Dialog, Box, Typography } from "@mui/material";
import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
  height: "28vh",
  width: "50vh",
  borderRadius: "10px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

const LogInDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const logInSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
  };
  const logInError = (res) => {
    console.log("Log In Error!", res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop="true">
      <Box id="dialogBoxOuter">
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
