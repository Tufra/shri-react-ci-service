import {Input} from "./form/Input";
import '../styles/modal.scss'
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export function Modal(props) {
    const settings = useSelector(state => state.settings)
    const lastNum = useSelector(state => state.lastNum)
    const dispatch = useDispatch()

    /**
     * Создает объект коммита, генерит статус и вставляет в контекст
     *
     * @param event
     */
    function runBuild(event) {
        event.preventDefault()
        const form = event.target
        const hash = form[0].value
        const now = new Date()

        /**
         * Рандомизация статуса
         * @type {number}
         */
        const rand = Math.random()
        let status = "pending"
        if (rand > 0.66) {
            status = "ok"
        } else if (rand > 0.33) {
            status = "err"
        }

        console.log(lastNum)
        /**
         *  Объект коммита
         *  дату генерим на основе сейчас
         */
        const commitInfo = {
            number: lastNum,
            status: status,
            branch: settings.branch,
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
            })
        }

        dispatch({
            type: 'commits/push_commit',
            payload: commitInfo
        })
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
