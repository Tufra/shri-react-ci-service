import {Header} from "./Header";
import {Commit} from './Commit'
import React from "react"
import '../styles/commithistory.scss'
import {Modal} from "./Modal";
import {useSelector} from "react-redux";


export function CommitHistory(props) {
    const commits = useSelector(state => state.commits)
    const settings = useSelector(state => state.settings)
    const [hidden, setHidden] = React.useState(true)

    console.log(commits)
    console.log(settings)
    /**
     *  Показывает/прячет модалку
     */
    function toggleModal() {
        setHidden(!hidden)
    }

    return (
        <>
            <Modal isHidden={hidden} toggleModal={toggleModal}/>
            <Header headerText={settings.repoName}
                    headerType={"black"}
                    showSettingsButton={true}
                    settingsButtonType={"smolbutn"}
                    showRunButton={true}
                    toggleModal={toggleModal}
            />
            <div className={'content-cont commit-history-cont'}>
                {
                    commits.map((info) => {
                        return <Commit commitInfo={info} key={info.hash} />
                    })
                }
                {commits.length > 5 ?
                    <input type="button" value={"Show more"}
                           className={"global-control-button"}
                           style={{"align-self": "flex-start"}}
                    /> :
                    null
                }
            </div>
        </>
    )
}
