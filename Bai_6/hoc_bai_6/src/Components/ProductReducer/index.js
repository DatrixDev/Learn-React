import { useEffect, useReducer, useState } from "react";
const init = {
    products: [],
    loading: true
}
const reducer = (state, action) => {
    if(action.type === "SUCCESS") {
        return {
            products:action.products,
            loading:false
        }
    } 
    else{
        return state;
    }
}

function ProductReducer() {
    const [data, dispatch] = useReducer(reducer, init);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            dispatch({
                type: "SUCCESS",    
                products: data.products
            });
        };

        setTimeout(() => {
            fetchApi()
        }, 3000);
    }, [])
    console.log(products);
    return (
        <>
            {data.loading ?
                (
                    <>Đang tải dữ liệu...</>
                )
                :

                (
                    <ul>
                        {data.products.map(item => (
                            <li key={item.id}>
                                {item.title}
                            </li>
                        )
                        )}
                    </ul>
                )
            }
        </>
    )
}
export default ProductReducer;