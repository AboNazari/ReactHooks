import React, { useState, useTransition } from 'react'

// useTransition is a hook that allows you to create a transition between two states.
// its used to create different level of importance for the setState function.
// it makes the setState function wrapped inside to be executed in a different level of priority. after the transition is done, the setState function will be executed.

const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [list, setList] = useState([]);
    const [input, setInput] = useState('');

    const LIST_SIZE = 20000;
    const onChangeHandler = (e) => {
        setInput(e.target.value);

        startTransition(() => {
            const l = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value);
            }
            setList(l);
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={onChangeHandler} />
            {
                isPending ? "Loading..." : list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
        </div>
    )
}

export default UseTransition