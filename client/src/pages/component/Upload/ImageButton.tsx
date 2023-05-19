//ライブラリ
import { ChangeEvent } from "react"
//mui
import { Button } from "@mui/material"

export const ImageButton = (props: {
    UploadFunc: Function
}) => {
    
    const ImageChange = async (e: ChangeEvent<HTMLInputElement>) => {    //画像読み込み
        props.UploadFunc(e.target.files![0]);
      }

    return (
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
    )
}