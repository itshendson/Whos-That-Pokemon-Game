import React from "react"

function MultipleChoices(props) {

    return(
        <div id="question-container">
            <button
                className="btn"
                value={props.data}
                onClick={props.handleClick}
            > 
                {props.data}
            </button>
        </div>
    )
}

export default MultipleChoices