import React from "react"
import Score from "./Score"

function TheStage(props) {
    return (
        <div id="stage-container">
            <Score
                data={props.data.score}
            />

            <img 
                className='the-stage' 
                src={props.data.correctImg} 
                alt='look a pokemon!'
            />
        </div>
    )
}

export default TheStage