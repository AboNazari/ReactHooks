
import { useState, useEffect, useMemo, useCallback } from 'react'
import List from './List';


// useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
// It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
// difference between useMemo and useCallback is that useCallback returns a function and useMemo returns a value.
// useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

const UseCallBack = () => {
    const [num, setNum] = useState(1);
    const [dark, setDark] = useState(false);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark]);

    const getItems = useCallback((incrementor) => {
        return [num + incrementor, num + 1 + incrementor, num + 2 + incrementor];
    }, [num]);


    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);

    const updateNum = (e) => {
        if (e.target.value === "") {
            console.log("Not a number");
            e.target.value = 0;
        }
        console.log(e.target.value);
        setNum(parseInt(e.target.value))
    };
    return (
        <div>
            <input type="number" value={num} onChange={updateNum} />
            <button onClick={() => setDark(!dark)}>Change Theme</button>
            <List getItems={getItems} theme={themeStyles} />
        </div>
    )
}

export default UseCallBack