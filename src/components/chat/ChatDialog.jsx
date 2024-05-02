import { Dialog, Box, styled } from "@mui/material";
//Components Import
import Menu from "./menu/Menu";
import React from "react";
import EmptyChat from "./chats/EmptyChat";
const Container = styled(Box)`
    display:flex;
`;
const LeftBox = styled(Box)`
    min-width:380px;
    width:25%;
    `;
const RightBox = styled(Box)`
    width:73%;
    min-width:300px;
    border-left: 1px solid #f2f2f2;
`;
const dialogStyle = {
  height: "95%",
  width: "100%",
  margin: "15px",
  borderRadius: "5px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const ChatDialog = () => {
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop="true" maxWidth={'md'}>
      <Container>
        <LeftBox>
            <Menu/>
        </LeftBox>
        <RightBox>
            <EmptyChat/>
        </RightBox>
      </Container>
    </Dialog>
  );
};

export default ChatDialog;
