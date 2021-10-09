import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {Settings} from "./components/Settings";
import {Main} from "./components/Main";
import {Footer} from './components/Footer'
import store from "./contexts/store";
import {Provider} from "react-redux";
import React from "react";

import  './styles/global.scss'

export function App() {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={'/settings'}>
                        <Settings />
                    </Route>
                    <Route path={'/'}>
                        <Main />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </Provider>

    )
}
