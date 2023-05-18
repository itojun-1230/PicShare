//library
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
//mui
import { Box } from "@mui/material";
//css
import styles from '../main.module.css';

export const UploadZone = (props: {
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

    return (
        <Box className={styles.uploadZone} 
            {...getRootProps()}
            onClick={() => {/*onClickイベント上書き*/}}
            />
    )
}