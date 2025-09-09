import { useState,useEffect } from "react";
import { getProductList } from "../../services/ProductsService";
import "./Product.scss"
import ProductItem from "./ProductItem";
function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthApi = async () => {
            const result = await getProductList();
            setProducts(result);
        }
        fecthApi();


    }, [])
    return (
        <>
            <div className="product">
                {products.map(item => (
                    <ProductItem item = {item} key={item.id}/>
                  
                ))}
            </div>
        </>
    )
}
export default Product;