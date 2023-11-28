export function Domain({domain, color}){
    const barStyle = {border: `1px solid ${color}`, boxShadow: `inset 0px 0px 7px 0px ${color}, 0px 0px 8px ${color}`}
    const progressStyle = {width: domain, backgroundColor: color}

    return(
        <div className = "domain-bar" style = {barStyle}>
            <div className = "progress" style={progressStyle}></div>
        </div>
    )

}