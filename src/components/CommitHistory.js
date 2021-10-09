import {Header} from "./Header";
import {Commit} from './Commit'
import React from "react"
import {settingsContext} from "../contexts/settingsContext";
import {commitsContext} from "../contexts/commitsContext";
import '../styles/commithistory.scss'
import {Modal} from "./Modal";


export function CommitHistory(props) {
    const settings = React.useContext(settingsContext)
    const commits = React.useContext(commitsContext)
    const [hidden, setHidden] = React.useState(true)
    console.log(commits)

    const commitList = commits.commits.map((info) => {
        console.log(info)
        return <Commit commitInfo={info} key={info.hash} />
    })
    ReactDOM.

    function toggleModal() {
        setHidden(!hidden)
    }

    return (
        <>
            <Modal isHidden={hidden} toggleModal={toggleModal} commitsContext={commits}/>
            <Header headerText={settings.settings?.repoName}
                    headerType={"black"}
                    showSettingsButton={true}
                    settingsButtonType={"smolbutn"}
                    showRunButton={true}
                    toggleModal={toggleModal}
            />
            <div className={'content-cont commit-history-cont'}>
                {commitList}
            </div>
        </>
    )
}
