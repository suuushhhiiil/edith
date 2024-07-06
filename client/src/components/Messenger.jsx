//Components Import
import React from "react";
import LogInDialog from "./account/LogInDialog";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import ChatContainer from "./chat/ChatContainer";
import styles from "./Messenger.module.scss";



const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <div
    className={`${styles.Container}`}>
      {
      account ?
      <ChatContainer />
      :
      <LogInDialog/>
    }</div>
  );
};

export default Messenger;
