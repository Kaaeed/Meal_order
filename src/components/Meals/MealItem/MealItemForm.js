import styles from './MealItemForm.module.css'
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        // its always current with ref created with useRef, value is always a string
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label={"Amount"} input={{
                id: 'amount_' + props.id,
                type: "text",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button type={"submit"}>Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;