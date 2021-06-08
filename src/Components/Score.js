import React from "react"

function Score(props) {


    return (
        <div id="score-container">
            <h1 id="score-font">{props.data}</h1>
        </div>
    )
}

export default Score