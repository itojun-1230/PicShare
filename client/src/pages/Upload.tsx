//ライブラリ
import { useState, useEffect, ChangeEvent } from 'react';
//API
import { getId } from '../api/data';
import { Box, Button } from '@mui/material';
//css
import styles from './main.module.css';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';

export const UploadPage = () => {
  const [OnlyValue, setOnlyValue] = useState<string>();
  useEffect(() => {
    getId().then((data) => setOnlyValue(data.id));
  }, []);

  const ImageChange = async (e: ChangeEvent<HTMLInputElement>) => {    //画像読み込み
    console.log(e.target.files![0]);
  }

  function onDrop<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) { //画像Drop
    if (isDragReject) { //許可されない形式がドロップされたときTrue
      return;
    }
    acceptedFiles.forEach(ImageFile => {
      console.log(ImageFile)
    });
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
    <Box className={styles.mainContents}>
      <ul>
        {OnlyValue}
      </ul>
      <Box {...getRootProps()} sx={{ width: "250px", height: "200px", background: "red" }}></Box>
      <Button
        variant="contained"
        component="label"
        sx={{
          background: "rgb(200, 77, 150)",
          "&:hover": {
            background: "rgb(200, 77, 150)"
          }
        }}>
        または写真を選択
        <input
          type="file"
          onChange={ImageChange}
          accept="image/png, image/jpeg, image/gif"
          hidden />
      </Button>
    </Box>
  );
};