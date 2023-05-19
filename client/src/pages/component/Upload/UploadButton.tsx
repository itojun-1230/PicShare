//library
import { useState } from "react";
//mui
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//css
import styles from './upload.module.css';

export const UploadButton = (props: {
    ServerUploadFunc: Function
}) => {

    const [Id, setId] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const TextFieldStyle: React.CSSProperties = {
        width: "100%",
        background: "rgb(230, 230, 230)",
        borderRadius: "5px",
        margin: "5px 0px"
    }

    const Alphanumeric_Character = (value: string) => {
        if(value.match(/^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/)) {
            return true;
        }else {
            return false;
        }
    }

    return (
        <Box className={styles.UploadOption}>
            <FormControl variant="outlined" style={TextFieldStyle}>
                <InputLabel sx={{ marginTop: "-7.5px" }}>Id</InputLabel>
                <OutlinedInput
                    size='small'
                    value={Id}
                    onChange={(e) => {
                        if( Alphanumeric_Character(e.target.value) )setId(e.target.value)
                    }}
                    inputProps={{
                        maxLength: 16,
                    }}
                />
            </FormControl>
            <FormControl variant="outlined" style={TextFieldStyle}>
                <InputLabel sx={{ marginTop: "-7.5px" }}>Password</InputLabel>
                <OutlinedInput
                    size='small'
                    type={showPassword ? 'text' : 'password'}
                    value={Password}
                    onChange={(e) => {
                        if( Alphanumeric_Character(e.target.value) )setPassword(e.target.value)
                    }}
                    inputProps={{
                        maxLength: 16,
                    }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(ref => !ref)}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                variant="contained"
                component="label"
                onClick={() => props.ServerUploadFunc(Id, Password)}
                sx={{
                    maxHeight: "45px",
                    background: "rgb(200, 77, 150)",
                    "&:hover": {
                        background: "rgb(200, 77, 150)"
                    }
                }}>
                <FileUploadIcon />
                画像をアップロード
            </Button>
        </ Box>
    )
}