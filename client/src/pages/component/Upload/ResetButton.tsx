//mui
import { Box, IconButton } from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
//css
import styles from './upload.module.css';

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