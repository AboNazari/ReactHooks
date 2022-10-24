import React, { useId } from 'react'

// useId is a hook that generates a unique id for a component. It is useful for labeling elements for accessibility. It is similar to the id prop on the <label> element, but it is guaranteed to be unique.


const UseId = () => {
    const id = useId();
    return (
        <>
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text" id={`${id}-name`} />
            <br />
            <br />
            <label htmlFor={`${id}-l/name`}>L/Name</label>
            <input type="text" id={`${id}-l/name`} />
            <br />
            <br />
            <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus atque nobis ullam vero laboriosam vitae. Nobis voluptate distinctio alias eum temporibus possimus! Natus modi velit id, ullam quo molestiae amet!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deleniti sit soluta veniam blanditiis atque corrupti ut consectetur illum quasi?
            </div>
        </>
    )
}

export default UseId