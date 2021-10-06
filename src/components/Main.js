import {settingsContext} from "../contexts/settingsContext";
import {commitsContext} from "../contexts/commitsContext";
import React from "react";
import {CommitHistory} from "./CommitHistory";
import {Startup} from "./Startup";
import {Footer} from "./Footer";


export function Main(props) {
    const areSettingsSet = React.useContext(settingsContext).areSet

    let content

    if (areSettingsSet) {
        content = <CommitHistory />
    } else {
        content = <Startup />
    }

    return (
        <CommitCo>
            { content }
        </CommitCo>
    )
}
