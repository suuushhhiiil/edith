import React from "react";
import { Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import styles from "./Search.module.scss";

const Search = () => {
    return (
        <Box className={`${styles.Component}`}>
            <Box className={`${styles.Wrapper}`}>
                <Box className={`${styles.Icon}`}>
                    <SearchIcon fontSize="small" />
                </Box>
                <InputBase
                    className={`${styles.InputField}`}
                    placeholder="Search or start a new chat "
                    fullWidth
                />
            </Box>
        </Box>
    );
};
export default Search;
