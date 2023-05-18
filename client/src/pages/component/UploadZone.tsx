//library
import { useEffect, useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
//mui
import { Box } from "@mui/material";
//component
import { UploadZoneBox } from "./UploadZoneBox";
//css
import styles from '../main.module.css';

export const UploadZone = (props: {
    Img: File | null,
    UploadFunc: Function
}) => {

    function onDrop<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) { //画像Drop
        if (isDragReject) { //許可されない形式がドロップされたときTrue
            return;
        }
        console.log(event)
        props.UploadFunc(acceptedFiles[0]);
    };
    const { isDragReject, getRootProps } = useDropzone({  //Drop検知イベント呼び出し
        onDrop,
        accept: {
            'image/png': [],
            'image/jpeg': [],
            'image/gif': []
        },
    });

    const [ImgSrc, setImgSrc] = useState<string | null>(null);
    useEffect(() => {
        if (props.Img) {
            if (ImgSrc) URL.revokeObjectURL(ImgSrc);

            const Src: string = URL.createObjectURL(props.Img);
            setImgSrc(Src);
        }
    }, [props.Img]);


    return (
        <Box className={styles.uploadZone}
            {...getRootProps()}
            onClick={() => {/*onClickイベント上書き*/ }}
        >
            <Box className={styles.uploadZoneBox}>
                {ImgSrc == null && (
                    <UploadZoneBox UploadFunc={props.UploadFunc} />
                )}
                {ImgSrc && (
                    <img src={ImgSrc} />
                )}
            </Box>
        </Box>
    )
}