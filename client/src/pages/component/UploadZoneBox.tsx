//mui
import { Box } from "@mui/material"
//component
import { UploadButton } from "./UploadButton";
//css
import styles from '../main.module.css';

export const UploadZoneBox = (props: {
    UploadFunc: Function
}) => {
    return (
        <>
            <p>Drag & Drop</p>
            <UploadButton UploadFunc={props.UploadFunc} />
        </>
    )
}