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
  const [OnlyValue, setOnlyValue] = useState<string>();
  useEffect(() => {
    getId().then((data) => setOnlyValue(data.id));
  }, []);

  const ImageUpload = (image: File) => {
    console.log(image)
  }

  return (
    <Box className={styles.mainContents}>
      {OnlyValue}
      <UploadZone UploadFunc={ImageUpload} />
      <UploadButton UploadFunc={ImageUpload} />
    </Box>
  );
};