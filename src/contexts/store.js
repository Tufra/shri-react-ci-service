import {createStore} from "redux";
import {reducer} from "./reducer";

const initState = {
    lastNum: 0,
    commits: localStorage.getItem('ci-commits')?
        JSON.parse(localStorage.getItem('ci-commits')): [],
    settings: localStorage.getItem('ci-settings')?
        JSON.parse(localStorage.getItem('ci-settings')): {}
}

const store = createStore(reducer, initState)

export default store