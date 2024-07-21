import React, {useState} from "react";
import classes from './counter.module.scss'


export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.green}>
            <h1>{count}</h1>

            <button onClick={increment} className={classes.button}>
                increment
            </button>
        </div>
    )
}