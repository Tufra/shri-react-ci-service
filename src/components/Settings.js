import React from "react";
import {settingsContext} from "../settingsContext";
import {Link} from "react-router-dom";



export function Settings() {
    const settings = React.useContext(settingsContext)
    console.log(settings)

    function saveSettings(event) {
        event.preventDefault()

        settings.setSettings(event.target.text.value)
        console.log(settings)
    }

    function deleteSettings() {
        settings.setSettings(false)
        console.log(settings)
    }

    return (
        <div>
            <Link to={'/'}>
                <button>aaa</button>
            </Link>
            <form action="" onSubmit={saveSettings}>
                <input type="text" name={'text'}/>
                <input type="submit"/>
            </form>
            <button onClick={deleteSettings}>OOO</button>
        </div>
    )
}
