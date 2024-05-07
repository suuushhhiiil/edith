import { Drawer } from "@mui/material";
import styles from "./InfoDrawer.module.scss"



const InfoDrawer = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    }
    return (
       <Drawer
            open={open}
            onClose={handleClose}
            className={`${styles.InfoDrawer}`}
       >

       </Drawer>
    )
}

export default InfoDrawer;