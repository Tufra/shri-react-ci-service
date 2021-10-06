import {Header} from "./Header";
import {Commit} from './Commit'
import React from "react"
import {settingsContext} from "../contexts/settingsContext";
import {commitsContext} from "../contexts/commitsContext";
import '../styles/commithistory.scss'


export function CommitHistory(props) {
    const settings = React.useContext(settingsContext)
    const commits = React.useContext(commitsContext)

    const commitList = commits.map((info) => {
        return <Commit commitInfo={info} />
    })

    return (
        <>
            <Header headerText={settings.settings?.repoName}
                    headerType={"black"}
                    showSettingsButton={true}
                    settingsButtonType={"smolbutn"}
                    showRunButton={true}
            />
            <div className={'content-cont commit-history-cont'}>
                {commitList}
            </div>
        </>
    )
}
