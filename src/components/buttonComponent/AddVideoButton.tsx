import "./addVideoButton.css"
import {Link} from "react-router-dom";
import {UPLOAD_VIDEO_ROUTE} from "../../utils/routes";
import addVideoImage from "../../images/AddVideoImage.png"

const AddVideoButton = () => {
    return <>
        <Link to={UPLOAD_VIDEO_ROUTE} className="add-video-button">
            <img src={addVideoImage} alt={"addVideoImage"}/>
            <p>ADD VIDEO</p>
        </Link>
    </>
}
export default AddVideoButton