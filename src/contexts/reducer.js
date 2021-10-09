
export function reducer(state, action) {
    console.log(action.type)
    console.log('settings/set_settings')
    switch (action.type) {
        case 'settings/set_settings': {
            localStorage.setItem('ci-settings', JSON.stringify(action.payload))
            console.log('set: ' + action.payload)
            return {
                commits: [],
                settings: action.payload
            }
        }
        case 'commits/push_commit': {
            console.log('pushed: ')
            let commitsCopy = state.commits
            commitsCopy.unshift(action.payload)
            localStorage.setItem('ci-commits', JSON.stringify(commitsCopy))
            return {
                lastNum: state.lastNum + 1,
                settings: state.settings,
                commits: commitsCopy
            }
        }
        default: return state
    }
}