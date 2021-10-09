import React from "react";
import {useHistory} from "react-router-dom";
import {Header} from "./Header";
import {Input} from "./form/Input";
import '../styles/settings.scss'
import {TimeInput} from "./form/TimeInput";
import {useDispatch, useSelector} from "react-redux";


export function Settings() {
    const settings = useSelector((state) => state)
    const dispatch = useDispatch()

    const [status, setStatus] = React.useState("")
    const history = useHistory()

    console.log(settings)

    async function saveSettings(event) {
        event.preventDefault()
        setStatus("Cloning...")

        const form = event.target
        const repoName = form[0].value
        const buildCommand = form[1].value
        const branch = form[2].value
        const time = form[3].value

        new Promise((resolve, reject) => {
            setTimeout(() => {
                const isValid = /[\._\-a-z0-9A-Z]*\/[\._\-a-z0-9A-Z]*/.test(repoName)
                if (isValid) resolve()
                else reject()
            }, 2000)
        }).then(
            () => {
                const obj = {
                    repoName: repoName,
                    buildCommand: buildCommand,
                    branch: branch,
                    time: time
                }
                console.log(obj)

                dispatch({
                    type: 'settings/set-settings',
                    payload: obj
                })
                setStatus('OK')
                //history.push('/')
                console.log(settings)
            },
            () => {
                setStatus('GitHub repository name error')
            }
        )
        //console.log(settings)
    }

    function goBack(dest) {
        //settings.setSettings(null) //дебаг
        history.push('/')
    }

    return (
        <>
            <Header headerType={"grey"}
                    showSettingsButton={false}
                    settingsButtonType={"smolbutn"}
                    showRunButton={false} />
            <div className={"content-cont"}>
                <p className={'settings-header'}>Settings</p>
                <p className={'settings-desc'}>Configure repository connection and synchronization settings.</p>
                <form action="" onSubmit={saveSettings}>
                    <Input inputName={'GitHub repository'}
                           value={settings.repoName}
                           required placeholder={'user-name/repo-name'}
                    />
                    <Input inputName={'Build command'}
                           value={settings.buildCommand}
                           required placeholder={'npm ci && npm run build'}
                    />
                    <Input inputName={'Main branch'}
                           value={settings.branch}
                           placeholder={'master |'}
                    />
                    <TimeInput inputName={'Time'}
                               value={settings.time}
                    />
                    <p className={"settings-status"}>{status}</p>
                    <div className={"settings-button-cont"}>
                        <input type="submit"
                               className={"global-action-button"}
                               value={'Save'}
                               disabled={status === 'Cloning...'}
                        />
                        <input type="button"
                               className={"global-control-button"}
                               value={'Cancel'}
                               disabled={status === 'Cloning...'}
                               onClick={goBack}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
