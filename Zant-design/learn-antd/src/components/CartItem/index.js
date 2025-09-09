import "./CartItem.css"
function CartItem({ title, style }) {
    return (
        <div className="card-item" style={style}>
            {title && <h4>{title}</h4>}
        </div>
    )
}
export default CartItem;
