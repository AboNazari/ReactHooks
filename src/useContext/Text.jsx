import React, { useContext } from 'react'
import { colorContext } from './ContextProvider';

const Text = () => {
    const { setText } = useContext(colorContext);
    const updateText = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={updateText} />
        </div>
    )
}

export default Text