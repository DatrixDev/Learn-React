import { useSelector } from "react-redux";
import "./Cart.scss"
import CartItem from "./CartItem";


function CartList() {
    const cart = useSelector(state => state.cartReducer);

    return (
        <>
            <div className="cart">
                {cart.map(item => (
                    <CartItem item = {item} key = {item.id}/>
                ))}
            </div>
        </>
    )
}
export default CartList;