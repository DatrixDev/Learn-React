import { useState } from "react";
function Lamp() {
    // let status = false;
    const [status, setState] = useState(false);

    const handleCick = () => {
        // status = !status;
        setState(!status);
    }
    console.log(status);
    return (
        <>
            <button onClick={handleCick}>
                 {status ? "Tắt đi" : "Bật lên"}
            </button>
            <div>
                {status ? "Đèn đang bật" : "Đèn đang tắt"}
            </div>
        </>
    )
}

export default Lamp;