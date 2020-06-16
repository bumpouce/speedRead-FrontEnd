import React from 'react'

const difficulty = (count) => {
    if (count > 9){
        console.log("Hard")
        return "hard"
    }
    else if (count > 4){
        console.log("Medium")
        return "medium"
    }
    else {
        console.log("Easy")
        return "easy"
    }
}

const TextSection = ({text, len}) => {
    return (
        <div width="200" className={`reading-section ${difficulty(len)}`}>{text} </div>
    )
}

export default TextSection