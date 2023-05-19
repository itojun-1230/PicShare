//library
import { useState, useEffect } from 'react';
//API
import { getId } from '../api/data';
//mui
import { Box } from '@mui/material';
//component
import { UploadButton } from './component/UploadButton';
import { UploadZone } from './component/UploadZone';
//css
import styles from './main.module.css';

export const UploadPage = () => {
  const [OnlyValue, setOnlyValue] = useState<string | null>(null);
  useEffect(() => {
    getId().then((data) => setOnlyValue(data.id));
  }, []);

  const [UploadImage, setUploadImage] = useState<File | null>(null)
  const ImageUpload = (image: File) => {
    if (image.size == 200000000) { //最大サイズを超えた場合
      alert(`画像容量が大きすぎます\n${(image.size / 1000000).toFixed(3)}MB`);
      return;
    }
    setUploadImage(image);
  }

  return (
    <Box className={styles.mainContents}>
      {OnlyValue}
      <UploadZone Img={UploadImage} setUpload={setUploadImage} UploadFunc={ImageUpload} />
    </Box>
  );
};