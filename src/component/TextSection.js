import React from 'react'

const difficulty = (text) => {
    let count = text.split(" ").length
    console.log("Word count: ", count)
    if (count <= 3){
        return "easy"
    }
    else if (count <= 10){
        return "medium"
    }
    else{
        return "hard"
    }
}

const TextSection = ({text}) => {
    return (
        <div width="200" className={`reading-section ${difficulty(text)}`}>{text} </div>
    )
}

export default TextSection