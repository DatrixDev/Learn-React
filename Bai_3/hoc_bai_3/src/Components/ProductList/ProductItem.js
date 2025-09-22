function ProductItem (props) {
    const {item} = props;
    return(
        <>
          <div className="product__item" key={item.id}>
                    <img className="product__image" src={item.image} alt={item.name} style={{width: "100px"}}/>
                    <div className="product__name"> {item.name}</div>
                    <div className="product__price"> Giá: {item.price}</div>
                </div>
        </>
    )
}
export default ProductItem;