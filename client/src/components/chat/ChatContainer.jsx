
//Components Import
import Menu from "./menu/Menu";
import React from "react";
import EmptyChat from "./chats/EmptyChat";
import styles from "./ChatContainer.module.scss"
import ChatBox from "./chats/ChatBox";

const ChatContainer = () => {
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
           {/*<EmptyChat/>*/}
           <ChatBox/>
        </div>
      </div>
  );
};

export default ChatContainer;
