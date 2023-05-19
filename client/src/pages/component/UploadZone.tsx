//library
import { useEffect, useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
//mui
import { Box } from "@mui/material";
//component
import { UploadZoneBox } from "./UploadZoneBox";
import { ResetButton } from "./ResetButton";
//css
import styles from '../main.module.css';
import { UploadButton } from "./UploadButton";

export const UploadZone = (props: {
    Img: File | null,
    UploadFunc: Function,
    ServerUploadFunc: Function,
    setUpload: React.Dispatch<React.SetStateAction<File | null>>
}) => {

    function onDrop<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) { //画像Drop
        if (isDragReject) { //許可されない形式がドロップされたときTrue
            return;
        }
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

    const ImageReset = () => {  //画像リセット
        props.setUpload(null);
        setImgSrc(null);
    }


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
                    <>
                        <img src={ImgSrc} />

                        <ResetButton reset={ImageReset} />
                        <UploadButton ServerUploadFunc={props.ServerUploadFunc} />
                    </>
                )}
            </Box>
        </Box>
    )
}