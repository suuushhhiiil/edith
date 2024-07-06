import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import styles from "./Search.module.scss";

const Search = () => {
    return (
        <div className={`${styles.Component}`}>
            <div className={`${styles.Wrapper}`}>
                <div className={`${styles.Icon}`}>
                    <SearchIcon fontSize="small" />
                </div>
                <InputBase
                    className={`${styles.InputField}`}
                    placeholder="Search or start a new chat "
                    fullWidth
                />
            </div>
        </div>
    );
};
export default Search;
