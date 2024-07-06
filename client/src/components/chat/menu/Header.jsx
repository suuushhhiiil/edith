import React from "react";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import styles from "./Header.module.scss";
import InfoDrawer from "../../drawer/InfoDrawer";


const Header=()=>{
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    const {account}= useContext(AccountContext);
    
    return (
        <>
        <div className={`${styles.Component}`}>
            <img 
            className={`${styles.Image}`}
            src={account.picture}
            alt="dp"
            onClick={()=>toggleDrawer()}
            />
            <div 
            className={`${styles.Wrapper}`}>
                <MessageIcon/>
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </div>    
        </div>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default Header;