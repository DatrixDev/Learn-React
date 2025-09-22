import { useEffect, useState } from "react";
import "./Product.scss"
function UseEffect3() {
    const limit = 10;
    const [data, setData] = useState([]);
    const [pageActive, setPageActive] = useState(0);
    const [quanlityPage, setQuanlityPage] = useState(0);

    useEffect(() => {
        fetch(
            `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data.products)
                setQuanlityPage(Math.ceil(data.total / limit));
            })

    }, [pageActive]);

    const handleClickPage = (e) => {
        setPageActive(e);
    }
    console.log(quanlityPage);
    console.log(...Array(quanlityPage));

    return (
        <>

            <div className="product__list">
                {data.map(item => (
                    <div className="product__item" key={item.id}>
                        <div className="product__image">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <h3 className="product__title">{item.title}</h3>
                        <div className="product__price">{item.price}</div>
                    </div>
                ))}
            </div>

            <ul className="pagination">
                {[...Array(quanlityPage)].map((_, index) => (
                    <li className="pagination__item" key={index} onClick={() => handleClickPage(index)}>{index + 1}</li>



                ))}
            </ul>
        </>
    )
}

export default UseEffect3;