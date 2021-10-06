import '../../styles/input.scss'
import React from "react";


export function TimeInput(props) {
    const [state, setState] = React.useState(props.value)

    function handleChange(event) {
        setState(event.target.value)
    }

    return (
        <div className={"time-input-cont"}>
            <span>
                Synchronize every <input type="number" value={state} name={"time"} className={"time-input"} onChange={handleChange}/> minutes
            </span>
        </div>
    )
}
