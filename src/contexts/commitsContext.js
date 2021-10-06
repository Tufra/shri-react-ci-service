import React from "react";


export const commitsContext = React.createContext({
    commits: [
        {
            number: 1337,
            
        }
    ],
    pushCommit (commitInfo) {
        this.commits.push(commitInfo);
    }
})
