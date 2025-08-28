import { useRef, useState } from "react";

function RandomGift() {
    const gifts = [
        "Điện thoại",
        "Máy tính",
        "Xe máy",
        "Đồng hồ",
        "Ô tô"
    ];
    const handleRandom = () => {
        if (counterRef.current < 3) {
            const random = Math.floor(Math.random() * gifts.length);
            setResult(gifts[random])
            counterRef.current = counterRef.current + 1;
        }

        else {
            alert("Bạn đã hết lượt")
        }
    }
    const [result, setResult] = useState("");
    const counterRef = useRef(0);
    return (
        <>
            <button onClick={handleRandom}>Random</button>
            <div>Bạn đã trúng thưởng: {result}</div>
        </>
    )
}

export default RandomGift;