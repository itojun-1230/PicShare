//mui
import { Box } from "@mui/material"
//component
import { ImageButton } from "./ImageButton";
//css
import styles from '../main.module.css';

export const UploadZoneBox = (props: {
    UploadFunc: Function
}) => {
    return (
        <>
            <p>Drag & Drop</p>
            <ImageButton UploadFunc={props.UploadFunc} />
        </>
    )
}