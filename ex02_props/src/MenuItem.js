import React from "react"

function MenuItem(props) {
    return (
        <div>
            <a href={props.link}>{props.name}</a>
        </div>
    )
}

export default MenuItem