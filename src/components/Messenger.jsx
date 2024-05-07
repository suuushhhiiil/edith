//Components Import
import React from "react";
import { styled, Box } from "@mui/material";
import LogInDialog from "./account/LogInDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatContainer from "./chat/ChatContainer";
import styles from "./Messenger.module.scss";



const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Box
    className={`${styles.Container}`}>
      <ChatContainer />
    </Box>
  );
};

export default Messenger;
