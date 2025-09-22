function Menu() {
    const arrrayMenu = [
        "Trang chủ",
        "Sản phẩm",
        "Tin tức",
        "Giới thiệu",
        "Liên hệ"
    ];
    return (
        <>
            {/* <ul>
             {arrrayMenu.map((item,index) => {
            return (
                <li key={index}>{item}</li>
            )
        })}
             </ul> */}

             {/* <ul>
                {
                    arrrayMenu.map(function (item,index) {
                        return <li key={index}>item</li>
                    })
                }
             </ul> */}


            <ul>
                {arrrayMenu.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

        </>
    )
}
export default Menu;