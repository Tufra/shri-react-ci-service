import React from "react";


export const commitsContext = React.createContext({
    lastNum: 0,
    commits: [
        // {
        //     number: 0,
        //     status: "ok",
        //     branch: "master",
        //     author: "abobus",
        //     hash: "228ef1",
        //     date: "21 Jan, 03:06",
        //     time: "1 h 20 m",
        //     name: "aaa"
        //
        // }
    ],
    pushCommit (commitInfo) {
        this.lastNum++;
        this.commits.unshift(commitInfo);
    }
})
