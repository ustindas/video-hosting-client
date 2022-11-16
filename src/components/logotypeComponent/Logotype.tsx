import searchImage from "../../images/logotype.png"
import {Link} from "react-router-dom";
import {VIDEO_ROUTE} from "../../utils/routes";
import "./logotype.css"

const Logotype = () => {
    return (
        <Link to={VIDEO_ROUTE} className="logotype-block">
            <img src={searchImage} alt={"logo"}/>
            <p> VitaxaTube </p>
        </Link>
    )
}

export default Logotype;