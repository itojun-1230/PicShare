//library
import { useState, useEffect } from 'react';
//mui
import { Box } from '@mui/material';
//api
import { upload } from '../api/data';
//component
import { UploadZone } from './component/Upload/UploadZone';
//css
import styles from './main.module.css';

export const UploadPage = () => {
  const [UploadImage, setUploadImage] = useState<File | null>(null)
  const ImageUpload = (image: File) => {
    if (image.size == 200000000) { //最大サイズを超えた場合
      alert(`画像容量が大きすぎます\n${(image.size / 1000000).toFixed(3)}MB`);
      return;
    }
    setUploadImage(image);
  }

  const ServerUploadFunc = (Id: string, Password: string) => {
    if(Id != "") {
      upload(UploadImage!, Id, Password);
    }else {
      alert("Idを入力してください")
    }
  }

  return (
    <Box className={styles.mainContents}>
      <UploadZone 
        Img={UploadImage} 
        setUpload={setUploadImage} 
        ServerUploadFunc={ServerUploadFunc} 
        UploadFunc={ImageUpload} 
        />
    </Box>
  );
};