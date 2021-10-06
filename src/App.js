import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {Settings} from "./components/Settings";
import {Main} from "./components/Main";
import {Footer} from './components/Footer'
import {settingsContext} from "./contexts/settingsContext";
import {commitsContext} from "./contexts/commitsContext";
import React from "react";

import  './styles/global.scss'

export function App() {

    return (
        <settingsContext.Provider>
            <commitsContext.Provider>
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
            </commitsContext.Provider>
        </settingsContext.Provider>

    )
}
