import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1 className='flex-1'> Welcome to React Hooks Demo Apps</h1>
            <div className='flex bg-slate-500'>
                <Link to="/screen">useContext</Link>
                <Link to="/useCallBack">useCallback</Link>
                <Link to="/useMemo">useMemo</Link>
                <Link to="/useReducer">useReducer</Link>
                <Link to="/useTransition">useTransition</Link>
                <Link to="/useDeferredValue">useDeferredValue</Link>
                <Link to="/UseLayoutEffect">UseLayoutEffect</Link>

            </div>
        </div>
    )
}

export default Home