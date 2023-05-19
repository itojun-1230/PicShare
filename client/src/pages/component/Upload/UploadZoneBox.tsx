//component
import { ImageButton } from "./ImageButton";

export const UploadZoneBox = (props: {
    UploadFunc: Function
}) => {
    return (
        <>
            <p>Drag & Drop</p>
            <ImageButton UploadFunc={props.UploadFunc} />
        </>
    )
}