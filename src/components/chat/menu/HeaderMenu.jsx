import { MoreVert } from "@mui/icons-material";
import {Menu, MenuItem, styled} from '@mui/material';
import React from "react";
import { useState } from "react";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  `;
const HeaderMenu=()=>{

  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(false);
  }
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  }
  return(
        <>
          <MoreVert onClick={handleClick}/>
          <Menu
            anchorEl={open}
            open={open}
            keepMounted
            onClose={handleClose}
            getContentAnchorE1={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical:'top',
              horizontal: 'right'
            }}
            >
            <MenuOption onClick={handleClose}>Profile</MenuOption>
            <MenuOption onClick={handleClose}>Logout</MenuOption>
          </Menu>
        </>
  )
}

export default HeaderMenu;