import React, { useEffect } from 'react'

const List = ({ getItems, theme }) => {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        console.log("List Rendered");
        setItems(getItems(2));
    }, [getItems]);

    return (
        <div style={theme}>
            {items.map((item) => <div key={item}>{item}</div>)}
        </div>
    )
}

export default List