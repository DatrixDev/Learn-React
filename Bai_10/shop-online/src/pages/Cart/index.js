import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./Cart.scss"
import { deleteAll } from "../../actions/cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const total =cart.reduce((sum,item) => {
        const priceNew =  (item.info.price * (100 - item.info.discountPercentage) / 100);
        return sum + priceNew*item.quantity;

    },0) 
    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }
    return (
        <>
            <h2>Giỏ hàng</h2>
            <button onClick={handleDeleteAll}>Xóa tất cả</button>
            <div>
                {cart.length > 0 ? (<>
                    <CartList />
                    <div className="cart__total">
                        Tổng tiền: <span>{total.toFixed(2)}$</span>
                    </div></>)
                    :
                    (<>Giỏ hàng trống</>)}
            </div >

        </>)
}

export default Cart;