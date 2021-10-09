import '../styles/header.scss'
import settingsIcon from '../images/set-icon.png'
import runIcon from '../images/run-icon.png'
import {Link} from "react-router-dom";

export function Header(props) {

    return (
        <div className={"header-cont"}>

            <a href="">
                <h1 className={props.headerType}>{props.headerText || 'School CI server'}</h1>
            </a>
            <div className={"header-button-cont"}>
                {props.showRunButton ?
                    <button className={"global-control-button header-button"} onClick={props.toggleModal}>
                        <img src={runIcon} alt=""/>
                        <span className={"header-optional-text"}>Run build</span>
                    </button> :
                    null
                }
                {props.showSettingsButton ?
                    <Link to={'/settings'}>
                        <button className={"global-control-button header-button " + props.settingsButtonType}>
                            <img src={settingsIcon} alt=""/>
                            {props.settingsButtonType !== "smolbutn" ?
                                <span className={"header-optional-text"}>Settings</span> :
                                null
                            }
                        </button>
                    </Link> :
                    null
                }
            </div>

        </div>
    )
}
