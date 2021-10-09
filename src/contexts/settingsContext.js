import React from "react";

let info
try {
    info = JSON.parse(localStorage.getItem('ci-service-settings'));
} catch (e) {
    info = {}
}
console.log(info)
console.log(!!info)

export const settingsContext = React.createContext({
    areSet: info? info.areSet : false,
    settings: info? info.settings: {},
    setSettings (newSets) {
        console.log(newSets)
        console.log(!newSets)
        console.log(!!newSets)
        this.settings = newSets
        this.areSet = !!newSets
        try {
            localStorage.setItem('ci-service-settings', JSON.stringify({areSet: this.areSet, settings: this.settings}))
        } catch (err) {
            console.log(err)
        }
    }
})
