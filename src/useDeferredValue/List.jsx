import React, { useDeferredValue, useMemo } from 'react'

const List = ({ input }) => {
    const deferredInput = useDeferredValue(input);

    const LIST_SIZE = 20000;

    const list = useMemo(() => {
        const l = [];
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    }, [deferredInput]);
    console.log(list)
    return list
}

export default List