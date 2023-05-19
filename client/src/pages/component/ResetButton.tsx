//mui
import { Box, IconButton, SxProps, Theme } from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
//css
import styles from '../main.module.css';

export const ResetButton = (props: {
    reset: Function
}) => {

    return (
        <Box className={styles.ImageButtonBox}>
            <IconButton onClick={() => props.reset()} >
                <CancelIcon fontSize="large"
                    sx={{
                        color: "rgb(255, 100, 100)"
                    }} />
            </IconButton>
        </Box>
    )
}