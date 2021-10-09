import React from "react";

// по идее надо засунуть в функцию чтоб глобал не засирать
let info
try {
    /**
     *  Есть ли сохраненное значение?
     *
     * @type {Object | null}
     */
    info = JSON.parse(localStorage.getItem('ci-service-settings'));
} catch (e) {
    info = {}
}

export const settingsContext = React.createContext({
    areSet: info? info.areSet : false,
    settings: info? info.settings: {},
    setSettings (newSets) {
        this.settings = newSets
        this.areSet = !!newSets
        try {
            localStorage.setItem('ci-service-settings', JSON.stringify({areSet: this.areSet, settings: this.settings}))
        } catch (err) {
            console.log(err)
        }
    }
})
