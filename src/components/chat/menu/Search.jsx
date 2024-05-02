import React from "react";
import { Box, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase }  from '@mui/material';

const Component=styled(Box)`
    background-color:#ffffff;
    height:35px;
    border-bottom:1px solid #f2f2f2;
    padding: 8px 8px;
    display:flex;
    align-items:center;
`;
const Wrapper= styled(Box)`
    background-color:#ede0d4;
    posittion:relative;
    margin: 0 9px;
    width:100%;
    border-radius:5px;
`;

const Icon = styled(Box)`
    position:absolute;
    height:100%;
    padding: 5px 8px;
    color: #919191;
    `;
const InputField=styled(InputBase)`
    width:100%;
    padding:16px;
    padding-left:45px;
    height:15px;
    font-size:14px;
`;
const Search = () =>{

    return(
    <Component>
        <Wrapper>
        <Icon>
                <SearchIcon
                fontSize="small"
                />
        </Icon>
        <InputField
            placeholder="Search or start a new chat " fullWidth
            />
        </Wrapper>
    </Component>
    );
}
 export default Search;