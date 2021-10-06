

export function Commit(props) {

    return (
        <div className={"commit-cont"}>
            <div className={"major-cont"}>
                <div>
                    <span className={"commit-number" + props.status}>
                        {props.number}
                    </span>
                    <span className={"commit-name"}>
                        {props.name}
                    </span>
                </div>
                <div>
                    <span className={"commit-branch"}>
                        <img src="" alt="" className={"commit-branch-icon"}/>
                        {props.branch}
                        <span className={"commit-hash"}>
                            {props.hash}
                        </span>
                    </span>
                    <span>
                        <img src="" alt="" className={"commit-author-icon"}/>
                        {props.author}
                    </span>
                </div>
            </div>
            <div className={"minor-cont"}>
                <div>
                    <img src="" alt="" className={"commit-date-icon"}/>
                    {props.date}
                </div>
                <div>
                    <img src="" alt="" className={"commit-time-icon"}/>
                    {props.time}
                </div>
            </div>
        </div>
    )
}
