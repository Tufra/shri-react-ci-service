import '../styles/commit.scss'

//некрасивое
const branchIcon = new URL('../images/branch.svg', import.meta.url);
const userIcon = new URL('../images/user.svg', import.meta.url);
const okIcon = new URL('../images/ok.svg', import.meta.url);
const errIcon = new URL('../images/neok.svg', import.meta.url);
const pendIcon = new URL('../images/wait.svg', import.meta.url);
const calIcon = new URL('../images/calendar.svg', import.meta.url);
const timerIcon = new URL('../images/timer.svg', import.meta.url);
//некрасивое

export function Commit(props) {

    return (
        <div className={"commit-cont"}>
            <div className={"major-cont"}>
                {props.commitInfo.status === "ok" ?
                    <img src={okIcon} className={"commit-status-icon"} alt=""/> :
                    props.commitInfo.status === "err" ?
                        <img src={errIcon} className={"commit-status-icon"} alt=""/> :
                        <img src={pendIcon} className={"commit-status-icon"} alt=""/>
                }
                <div className={"top-row"}>
                    <span className={"commit-number " + props.commitInfo.status}>
                        #{props.commitInfo.number}
                    </span>
                    <span className={"commit-name"}>
                        {props.commitInfo.name || "commit"}
                    </span>
                </div>
                <div className={"bottom-row"}>
                    <span className={"commit-branch"}>
                        <img src={branchIcon} alt="" className={"commit-branch-icon"}/>
                        {props.commitInfo.branch}
                        <span className={"commit-hash"}>
                            {props.commitInfo.hash}
                        </span>
                    </span>
                    <span className={"commit-author"}>
                        <img src={userIcon} alt="" className={"commit-author-icon"}/>
                        {props.commitInfo.author}
                    </span>
                </div>
            </div>
            <div className={"minor-cont"}>
                <div className={"top-row"}>
                    <img src={calIcon} alt="" className={"commit-date-icon"}/>
                    {props.commitInfo.date}
                </div>
                <div className={"bottom-row"}>
                    <img src={timerIcon} alt="" className={"commit-time-icon"}/>
                    {props.commitInfo.time}
                </div>
            </div>
        </div>
    )
}
