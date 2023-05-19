//mui
import { useState } from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
//css
import styles from "./head.module.css";

export const Header = () => {

    const ButtonStyle = {
        "&:hover": {
            background: "rgb(150, 150, 150)"
        }
    }
    const [ Root ] = useState<string>(location.href.split("/").slice(0, 3).join("/"))

    return (
        <Box>
            <AppBar id={styles.Header} position="static">
                <Toolbar>
                    <Button id={styles.HeaderButton} color="inherit"
                        sx={{
                            ...ButtonStyle
                        }}
                        onClick={() => location.href = `${Root}/`}
                        >
                        <FileUploadIcon />
                        &ensp;Upload
                    </Button>
                    <Button id={styles.HeaderButton} color="inherit"
                        sx={{
                            ...ButtonStyle,
                            borderRightWidth: "2px"
                        }}
                        onClick={() => location.href = `${Root}/browse`}
                        >
                        <PreviewIcon />
                        &ensp;Browse
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}