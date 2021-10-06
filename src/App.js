import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {Settings} from "./components/Settings";
import {Main} from "./components/Main";
import {Footer} from './components/Footer'
import {settingsContext} from "./settingsContext";
import React from "react";

export function App() {

    const initContext = React.useContext(settingsContext)

    return (
        <settingsContext.Provider value={initContext}>
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
        </settingsContext.Provider>

    )
}
