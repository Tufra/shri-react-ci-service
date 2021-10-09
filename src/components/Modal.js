import {Input} from "./form/Input";
import '../styles/modal.scss'
import {settingsContext} from "../contexts/settingsContext";
import React from "react";
import {Main} from "./Main";
import {commitsContext} from "../contexts/commitsContext";


export function Modal(props) {
    const settings = React.useContext(settingsContext)

    function runBuild(event) {
        event.preventDefault()
        const form = event.target
        const hash = form[0].value
        const now = new Date()
        const commitInfo = {
            number: props.commitsContext.lastNum,
            status: "pending",
            branch: settings.settings.branch,
            author: "abobus",
            hash: hash,
            date: now.toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit"
            }),
            time: now.toLocaleTimeString("ru-RU", {
                hour: "numeric",
                minute: "numeric"
            }),
            mock: setTimeout(() => {
                if (Math.random() > 0.6) {
                    this.status = "ok"
                } else {
                    this.status = "err"
                }
                console.log(props.commitsContext.commits)
                clearTimeout(this.mock)
            }, 1000)
        }
        props.commitsContext.pushCommit(commitInfo)
        props.toggleModal()
    }

    return (
        <div className={"modal-cont " + (props.isHidden? "hidden" : "")}>
            <div className={"modal"}>
                <h1>New build</h1>
                <form action="" onSubmit={runBuild}>
                    <Input inputName={"Enter the commit hash which you want to build."}
                           placeholder={"Commit hash"}
                           required
                    />
                    <div className={"modal-button-cont"}>
                        <input type="submit" className={"global-action-button"} value={"Run build"} />
                        <input type="button" className={"global-control-button"} value={"Cancel"} onClick={props.toggleModal}/>
                    </div>
                </form>
            </div>
        </div>
    )
}