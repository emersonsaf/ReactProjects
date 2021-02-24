import { useState } from 'react';

interface ButtonProps {
    color: String;
    children: String;
}


export default function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1);
    }

    return (
            <button style={{ backgroundColor: props.color }} onClick={increment}>
                {props.children} <strong>{counter}</strong>
            </button>
    );
}