import React from 'react'

const Button = ({text, onclick}) => {
    return (
        <>
            <button onClick={onclick}>{text}</button>
            
        </>
    )
}

export default Button