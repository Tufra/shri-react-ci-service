import React from "react";
import {settingsContext} from "../contexts/settingsContext";
import {useHistory} from "react-router-dom";
import {Header} from "./Header";
import {Input} from "./form/Input";
import '../styles/settings.scss'
import {TimeInput} from "./form/TimeInput";



export function Settings() {
    const settings = React.useContext(settingsContext)
    const history = useHistory()

    console.log(settings.settings)

    function saveSettings(event) {
        event.preventDefault()
        const form = event.target

        const repoName = form[0].value
        const buildCommand = form[1].value
        const branch = form[2].value
        const time = form[3].value

        const obj = {
            repoName: repoName,
            buildCommand: buildCommand,
            branch: branch,
            time: time
        }
        console.log(obj)

        settings.setSettings(obj)

        history.push('/')
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
                    <Input inputName={'GitHub repository'} value={settings.settings?.repoName} required placeholder={'user-name/repo-name'}/>
                    <Input inputName={'Build command'} value={settings.settings?.buildCommand} required placeholder={'npm ci && npm run build'}/>
                    <Input inputName={'Main branch'} value={settings.settings?.branch} placeholder={'master |'}/>
                    <TimeInput inputName={'Time'} value={settings.settings?.time}/>
                    <div className={"settings-button-cont"}>
                        <input type="submit" className={"global-action-button"} value={'Save'}/>
                        <input type="button"
                               className={"global-control-button"}
                               value={'Cancel'}
                               onClick={goBack}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
