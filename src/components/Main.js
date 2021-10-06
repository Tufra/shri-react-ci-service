import {settingsContext} from "../settingsContext";
import React from "react";
import {CommitHistory} from "./CommitHistory";
import {Startup} from "./Startup";


export function Main(props) {
    const areSettingsSet = React.useContext(settingsContext).areSet

    let content
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
