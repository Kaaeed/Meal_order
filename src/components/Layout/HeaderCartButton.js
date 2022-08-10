import styles from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return (currentNumber + item.amount);
    }, 0);

    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

    // using object destructuring to pull out the items data from cartCtx
    const {items} = cartCtx;

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button id={props.id} type={props.type || 'button'} className={btnStyles} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;