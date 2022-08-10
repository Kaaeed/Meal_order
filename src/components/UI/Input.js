import styles from './Input.module.css'
import React from "react";

// ref passed as argument can be used inside our component thanks to the forwardRef
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;