import React, {useState, DragEvent} from 'react';
import "./addVideoPage.css"
import {uploadVideo} from "../../http/videoRequests";

const AddVideoPage = () => {
    const [drag, setDrag] = useState(false);
    const [files, setFiles] = useState({})

    function dragStartHandler(e: DragEvent<HTMLDivElement>): void {
        e.preventDefault()
        setDrag(true);
    }

    function dragLeaveHandler(e: DragEvent<HTMLDivElement>): void {
        e.preventDefault()
        setDrag(false);
    }

    function onDropHandler(e: React.DragEvent<HTMLDivElement>): void{
        e.preventDefault()
        let file = Array.from(e.dataTransfer.files)[0]
        setFiles(file)
        setDrag(false)

    }

    async function savedFiles() {
        await uploadVideo(files)
    }

    return (
        <div style={{paddingTop: 200}}>
            {
                drag
                    ? <div className='drop-area'
                           onDragStart={dragStartHandler}
                           onDragOver={dragStartHandler}
                           onDragLeave={dragLeaveHandler}
                           onDrop={onDropHandler}

                    >Отпустите файлы чтобы загрузить их</div>
                    : <div className='drop-area'
                           onDragStart={dragStartHandler}
                           onDragOver={dragStartHandler}
                           onDragLeave={dragLeaveHandler}
                    >Перетащите файлы чтобы загрузить их</div>
            }
            <button onClick={savedFiles}>
                UPLOAD
            </button>
        </div>
    )
}
export default AddVideoPage;