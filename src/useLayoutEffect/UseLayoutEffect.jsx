import React, { useLayoutEffect, useRef, useState } from 'react'

// useLayoutEffect is used to perform side effects synchronously after all DOM mutations.
// It is useful for reading layout from the DOM and synchronously re-rendering.
// Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

const UseLayoutEffect = () => {
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();
    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return;

        const { bottom } = button.current.getBoundingClientRect();
        popup.current.style.top = `${bottom + 40}px`;
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
            {
                show && <div style={{ position: "absolute" }} ref={popup}>This is a Popup</div>
            }
        </>
    )
}

export default UseLayoutEffect