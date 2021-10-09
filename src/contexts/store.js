import {createStore} from "redux";
import {reducer} from "./reducer";

const initState = {
    commits: [],
    settings: localStorage.getItem('ci-settings')?
        JSON.parse(localStorage.getItem('ci-settings')): {}
}

const store = createStore(reducer, initState)

export default store