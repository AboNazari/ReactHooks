import { useState, useEffect, useMemo } from 'react'


// useMemo is used to memoize the result of a function: cache the result of a function
// so that if the same function is called with the same arguments, the cached result is returned.
// useMemo is used to optimize performance.
// useMemo is also used referentially equal to avoid unnecessary re-renders.

const UseMemoComp = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNum = useMemo(() => {
        return slowDouble(num);
    }, [num]);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark]);

    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);

    return (
        <div>
            <input type="text" onChange={(e) => setNum(e.target.value)} />
            <button onClick={() => setDark(!dark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNum}</div>
        </div>
    )
}

function slowDouble(num) {
    console.log("Slow Double");
    for (let i = 0; i < 100000000; i++) { }
    return num * 2;
}

export default UseMemoComp