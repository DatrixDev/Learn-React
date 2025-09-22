import { useState } from "react";
function Cart() {
    const unitPrice  =  120000;
    const [quantity,setQuantity] = useState(1);
    const handleChange = (e) => {
        const updateQuantity = parseInt(e.targe.value);
        setQuantity(updateQuantity);
    }
    return (
        <>
            <table className="cart">
                <thead>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Giày thể thao nam cao cấp</td>
                        <td>
                            <input defaultValue={quantity} type="number" min={1} onChange={handleChange}/>
                        </td>
                        <td>{unitPrice}</td>
                        <td>{unitPrice * quantity}đ</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


export default Cart;