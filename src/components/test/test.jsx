import { useState } from "react";



export const Greetings = () => {

    const [count, setCount] = useState(0);

    const handleClickIncrease =  () => {
        setCount(count + 1);
    }

    const handleClickDecrease =  () => {
        setCount(count - 1);
    }

    const handleClickZero =  () => {
        if (count === 0) {
            alert("zero already");
        }
        setCount(0);
    }

    return (
    <>
    <h1>{count}</h1>
    <button onClick={handleClickIncrease}>Increase</button>
    <button onClick={handleClickDecrease}>Decrease</button>
    <button onClick={handleClickZero}>Reset</button>
    </>
    )
}

