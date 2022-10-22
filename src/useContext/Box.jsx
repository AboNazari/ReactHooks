import React, { useContext } from 'react'
import { colorContext } from './ContextProvider'

const Box = () => {
    const { color, text } = useContext(colorContext);
    return (
        <div style={{ width: "30vw", height: "40vh", backgroundColor: color, padding: 50, color: "white" }}>{text}</div>
    )
}

export default Box