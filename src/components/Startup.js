import * as startup from '../styles/startup.scss'
import * as globalStyle from '../styles/global.scss'
import img from '../images/startup.png'
import {Link} from "react-router-dom";

export function Startup() {

    return (
        <>
            <div className={"startup-centered-cont"}>
                <img src={img} alt="" className={"startup-img"}/>
                <p className={"startup-message"}>
                    Configure repository connection<br/>
                    and synchronization settings
                </p>
                <Link to={'/settings'}>
                    <button className={'global-action-button'}>Open settings</button>
                </Link>
            </div>
        </>
    )
}
