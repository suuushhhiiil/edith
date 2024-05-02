import { createContext, useState } from "react";
import React from "react";


const AccountProvider =({children})=>{
    
    const [account, setAccount]=useState();
    return(
        <AccountContext.Provider value={{
            account,
            setAccount
        }}>
            {children}
        </AccountContext.Provider>

)
}

export const AccountContext= createContext(null);
export default AccountProvider;