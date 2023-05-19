//mui
import { Button } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const UploadButton = (props: {
    ServerUploadFunc: Function
}) => {
    
    return (
        <Button
            variant="contained"
            component="label"
            onClick={() => props.ServerUploadFunc()}
            sx={{
                position: "absolute",
                bottom: "5%",
                background: "rgb(200, 77, 150)",
                "&:hover": {
                    background: "rgb(200, 77, 150)"
                }
            }}>
            <FileUploadIcon />
            画像をアップロード
        </Button>
    )
}