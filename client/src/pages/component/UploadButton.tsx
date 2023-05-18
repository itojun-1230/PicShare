//ライブラリ
import { ChangeEventHandler } from "react"
//mui
import { Button } from "@mui/material"


export const UploadButton = (props: {
    onChange: ChangeEventHandler<HTMLInputElement>
}) => {
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
                onChange={props.onChange}
                accept="image/png, image/jpeg, image/gif"
                hidden />
        </Button>
    )
}