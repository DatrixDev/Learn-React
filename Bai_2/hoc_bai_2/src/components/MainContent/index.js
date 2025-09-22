import { FaBootstrap } from "react-icons/fa";
function MainContent() {
    let name = "Võ Quốc Đạt"
    const css = {
        color: "red",
        backgroundColor: "blue"
    };
    return (
        <>
            <div className="box">
                <div className='test' style={{ color: "red", backgroundColor: "blue" }}>
                    Xin chào {name}
                </div>
                <div className='test2' style={css}>
                    Xin chào {name}
                </div></div>

            <FaBootstrap style={{fontSize: "50px"}}/>
        </>
    )
}

export default MainContent;