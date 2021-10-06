import '../styles/header.scss'
import icon from '../images/cog 1.png'
import {Link} from "react-router-dom";

export function Header(props) {

    return (
        <div className={"header-cont"}>
            <a href="">
                <h1>School CI server</h1>
            </a>
            <div className={"header-button-cont"}>
                {props.showButton ?
                    <Link to={'/settings'}>
                        <button className={"global-control-button header-settings-button "}>
                            <img src={icon} alt=""/>
                            <span className={"header-optional-text"}>Settings</span>
                        </button>
                    </Link> :
                    null
                }
            </div>

        </div>
    )
}
