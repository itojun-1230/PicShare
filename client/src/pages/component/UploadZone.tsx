//library
import { useEffect, useState } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
//mui
import { Box } from "@mui/material";
//component
import { UploadZoneBox } from "./UploadZoneBox";
import { ImageButton } from "./ImageButton";
//css
import styles from '../main.module.css';

export const UploadZone = (props: {
    Img: File | null,
    UploadFunc: Function,
    setUpload: React.Dispatch<React.SetStateAction<File | null>>
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

                        <ImageButton reset={ImageReset} />
                    </>
                )}
            </Box>
        </Box>
    )
}