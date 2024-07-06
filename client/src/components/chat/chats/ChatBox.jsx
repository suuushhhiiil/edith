import React from "react";
import styles from "./ChatBox.module.scss";
//Components import
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";

const ChatBox = () => {
    return (
        <>
            <div 
            className={`${styles.ChatBox}`}>
                <div>
                    <ChatHeader />
                </div>
                <div>
                    <Messages />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ChatBox;
