
const SET_SETTINGS = 'settings/set_settings'
const PUSH_COMMIT = 'commits/push_commit'

export function reducer(state, action) {
    switch (action.type) {
        case SET_SETTINGS: {
            localStorage.setItem('ci-settings', JSON.stringify(action.payload))
            console.log('set: ' + action.payload)
            return {
                commits: state.commits,
                settings: action.payload
            }
        }
        case PUSH_COMMIT:{
            console.log('pushed: ' + action.payload)
            return {
                settings: state.settings,
                commits: state.commits.unshift(action.payload)
            }
        }
        default: return state
    }
}