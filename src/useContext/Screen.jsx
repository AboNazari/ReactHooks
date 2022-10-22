import { useContext, useState } from 'react';
import { colorContext } from './ContextProvider'

function Screen() {
    const { color, setColor } = useContext(colorContext);
    const [btnColor, setBtnColor] = useState(color);
    const changeBg = () => {
        color === "red" ? setColor("black") : setColor("red");
        btnColor === "red" ? setBtnColor("black") : setBtnColor("red");
    }

    console.log(btnColor)
    return (
        <div style={{
            width: "100vw",
        }}>
            <button onClick={changeBg} style={{ width: "10vw", color: "white", padding: 10, background: btnColor, margin: "auto" }}>{color}</button>
        </div >
    )
}

export default Screen