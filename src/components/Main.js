import {settingsContext} from "../contexts/settingsContext";
import React from "react";
import {CommitHistory} from "./CommitHistory";
import {Startup} from "./Startup";
import {useSelector} from "react-redux";


export function Main(props) {
    const settings = useSelector(state => state.settings)
    console.log('set: ')
    console.log(settings)
    let content

    /**
     *  рендерим в зависимости от наличия настроек в контексте
     */
    if (settings.hasOwnProperty("repoName")) {
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
