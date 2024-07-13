import React, { useEffect, useState } from "react";
import styles from "./ChatBox.module.scss";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
//Components import
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { getConversation } from "../../../service/api";



const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
      setConversation(data);
    }
    getConversationDetails();
  }, [person.sub]);

  return (
    <>
      <div className={`${styles.ChatBox}`}>
        <div>
          <ChatHeader person={person} />
        </div>
        <Messages person = {person} conversation = {conversation} />
      </div>
    </>
  );
};

export default ChatBox;
