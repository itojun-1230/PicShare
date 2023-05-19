
//library
import { useEffect, useState } from "react";
//mui
import { Box } from "@mui/material";
//component

//css
import styles from './browse.module.css';
import { ResetButton } from "../Upload/ResetButton";

export const BrowseZone = (props: {
    Img: string,
    setImg: React.Dispatch<React.SetStateAction<string | null>>
}) => {



    return (
        <Box className={styles.browseZone}>
            <Box className={styles.browseZoneBox}>
                <img src={props.Img} />

                <ResetButton reset={() => props.setImg(null)} />
            </Box>
        </Box>
    )
}