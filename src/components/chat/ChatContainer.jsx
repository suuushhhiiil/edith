import { Box, styled } from "@mui/material";
//Components Import
import Menu from "./menu/Menu";
import React from "react";
import EmptyChat from "./chats/EmptyChat";
import styles from "./ChatContainer.module.scss"

const ChatContainer = () => {
  return (
      <Box
      className={`${styles.Container}`}
      >
        <Box
        className={`${styles.LeftBox}`}>
            <Menu/>
        </Box>
        <Box
        className={`${styles.LeftBox}`}>
            <EmptyChat/>
        </Box>
      </Box>
  );
};

export default ChatContainer;
