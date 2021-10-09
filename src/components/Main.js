import {settingsContext} from "../contexts/settingsContext";
import React from "react";
import {CommitHistory} from "./CommitHistory";
import {Startup} from "./Startup";


export function Main(props) {
    const areSettingsSet = React.useContext(settingsContext)?.areSet

    let content

    /**
     *  рендерим в зависимости от наличия настроек в контексте
     */
    if (areSettingsSet) {
        content = <CommitHistory />
    } else {
        content = <Startup />
    }

    return (
        <>
            { content }
        </>
    )
}
