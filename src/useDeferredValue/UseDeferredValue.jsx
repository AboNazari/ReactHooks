import React, { useState } from 'react'
import List from './List';

// This is a simple example of how to use useDeferredValue
// useDeferredValue is used to work like a debounce function in React
// It is used to delay the update of a value until the next render cycle
// This is useful when you have a value that is updated frequently
// simply wrap the value in useDeferredValue and it will only update
// it will wait for the frequency of updates to slow down before updating
// This is useful for things like text inputs where you don't want to update the value on every keystroke but rather when the user is done typing or has paused for a moment to think

const UseDeferredValue = () => {
    const [input, setInput] = useState('');

    const onChangeHandler = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input type="text" value={input} onChange={onChangeHandler} />
            <List input={input} />
        </div>
    )
}

export default UseDeferredValue