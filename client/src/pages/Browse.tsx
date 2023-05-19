//library
import { useState, useEffect } from 'react';
//mui
import { Box } from '@mui/material';
//component
import { Certification } from './component/Browse/Certification';
import { BrowseZone } from './component/Browse/BrowseZone';
//API
import { AuthImage } from '../api/data';
//css
import styles from './main.module.css';

export const BrowsePage = () => {
  const [ImgSrc, setImgSrc] = useState<string | null>(null);

  const setImage = async (id: string, password: string) => {
    AuthImage(id, password, setImgSrc);
  }

  return (
    <Box className={styles.mainContents}>
      {ImgSrc && (
        <BrowseZone Img={ImgSrc} setImg={setImgSrc} />
      )}
      {!ImgSrc && (
        <Certification setImg={setImage} />
      )}
    </ Box>
  )
};