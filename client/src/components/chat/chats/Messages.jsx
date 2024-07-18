import React from "react";
import styles from "./Messages.module.scss";
import { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

//Components
import Footer from "./Footer";
import MessageSingle from "./MessageSingle";



const Messages = ({person, conversation}) => {
    
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const { account } = useContext(AccountContext);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const scrollRef = useRef();

    useEffect(() => {
      const getMessageDetails = async () => {
        let data = await getMessages(conversation._id);
        setMessages(data);
      }
      conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag])


    
    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({transition : "smooth"});
      }
    }, [messages]);

    const sendText = async (event) => {
      const code = event.key || event.which;
      if(code === "Enter" || code=== 13){
        let message =" ";
        if(file)
        {
          message = {
            senderId: account.sub,
            receiverId: person.sub,
            conversationId: conversation._id,
            type: 'file',
            text: image
        }}
        else {  
            message = {
              senderId: account.sub,
              receiverId: person.sub,
              conversationId: conversation._id,
              type: 'text',
              text: value
        }
      }

      await newMessage(message);
      setValue('');
      setFile('');
      setImage('');
      setNewMessageFlag(prev => !prev);
      }
}


  return (
    <>
    <div className={`${styles.Container}`}>
      <div 
      className={`${styles.Wrapper}`}
      >
        {
          messages && messages.map(message => (
            <div
            className={`${styles.MessageSingle}`}
            //ref={scrollRef} //this is giving an error for the scroll-effect
            >
            <MessageSingle message={message} 
            />    
            </div>  
          ))
        }
        </div>
        <div 
        className={`${styles.Footer}`}>
          <Footer 
            sendText={sendText}
            setValue = {setValue}
            value = {value}
            file= {file}
            setFile={setFile}
            setImage={setImage}
          />
        </div>
      </div>
    </>
  );
};
export default Messages;
