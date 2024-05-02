import { Box, styled } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Chat as MessageIcon, MoreVert } from "@mui/icons-material";

import HeaderMenu from "./HeaderMenu";

const Component = styled(Box)`
    height:44px;
    background-color:#ede0d4;
    padding: 8px 16px;
    display:flex;
    align-items:center;
    border:1px solid #f2f2f2;
`;
const Wrapper= styled(Box)`
    margin-left:auto;
    &> * {
        margin-left:2px;
        padding:8px;
    };
    &: first-child {
        font-size:22px;
        margin-right: 8px;
        margin-top: 4px;
    }
`;
const Image=styled('img')({
    height:40,
    width:40,
    borderRadius:"50%"
});
const ImageBox=styled(Box)`
    height:40;
    width:40;
    borderRadius:"50%";
`;
const Header=()=>{
    const {account}= useContext(AccountContext);
    return (
        <>
        <Component>
            <ImageBox/>
            <Wrapper>
                <MessageIcon/>
                <HeaderMenu/>
            </Wrapper>    
        </Component>
        </>
    )
}


export default Header;