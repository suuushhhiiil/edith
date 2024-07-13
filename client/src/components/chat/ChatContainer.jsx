import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";


//Components Import
import Menu from "./menu/Menu";
import React from "react";
import EmptyChat from "./chats/EmptyChat";
import styles from "./ChatContainer.module.scss"
import ChatBox from "./chats/ChatBox";

const ChatContainer = () => {
  const { person } = useContext(AccountContext);

  return (
      <div
      className={`${styles.Container}`}
      >
        <div
        className={`${styles.LeftBox}`}>
            <Menu/>
        </div>
        <div
        className={`${styles.RightBox}`}>
          { Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </div>
      </div>
  );
};

export default ChatContainer;
