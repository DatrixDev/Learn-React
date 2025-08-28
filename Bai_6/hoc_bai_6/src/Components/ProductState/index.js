import { useEffect, useState } from "react";

function ProductState() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // const fetchApi = async () => {
        //     fetch("https://dummyjson.com/products")
        //         .then(res => res.json())
        //         .then(data => {
        //             setProducts(data.products);
        //             setLoading(false);
        //         })
        // }

            const fetchApi = async () => {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            setProducts(data.products);
            setLoading(false);
        };

        setTimeout(() => {
            fetchApi()
        }, 3000);
    }, [])
    console.log(products);
    return (
        <>
            {loading ?
                (
                    <>Đang tải dữ liệu...</>
                )
                :

                (
                    <ul>
                        {products.map(item => (
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
export default ProductState;