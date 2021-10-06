import React from "react";
import '../../styles/input.scss'
import clearIcon from '../../images/clear-input.svg'


export function Input(props) {
    const [state, setState] = React.useState(props.value)

    function handleChange(event) {
        setState(event.target.value)
    }

    function clearInput() {
        setState('')
    }

    return (
        <div className={"input-cont"}>
            <label htmlFor={"input-" + props.inputName }>
                { props.inputName }
                { props.required ?
                    <span className={"input-required-mark"}> *</span>
                    : null }
            </label>
            <div className={"input-cont"}>
                <input type="text"
                       value={state}
                       name={ props.inputName }
                       placeholder={ props.placeholder }
                       onChange={handleChange}
                       required={ props.required }
                />
                {state ?
                    <img src={clearIcon} alt="" className={"input-clear-button"} onClick={clearInput}/> :
                    null
                }

            </div>
        </div>
    )
}
