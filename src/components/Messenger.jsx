//Components Import
import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LogInDialog from "./account/LogInDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
const Container = styled(Box)`
  height: 100vh;
  background-color: #ede0d4;
  overflow:hidden;
`;
const Header = styled(AppBar)`
  background-color: #7f5539;
  box-shadow: hidden;
`;
const LogInHeader = styled(AppBar)`
  background-color: #7f5539;
  box-shadow: hidden;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Container>
      {account ? (
        <>
          <Header>
            <Toolbar>
            </Toolbar>
          </Header>
          <ChatDialog/>
        </>
      ) : (
        <>
          <LogInHeader>
            <Toolbar></Toolbar>
          </LogInHeader>
          <LogInDialog/>
        </>
  )};
  </Container>
  )
};

export default Messenger;
