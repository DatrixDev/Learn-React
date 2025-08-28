import { useRef, useState } from "react";

function UseRef() {
  const [counter, setCounter] = useState(0);  
  const counterRef = useRef(0);               
  let counterObj = { current: 0 };           

  const handleClick = () => {
    setCounter((prev) => prev + 1);

    counterRef.current = counterRef.current + 1;

    counterObj.current = counterObj.current + 1;

    console.log(">>> Trong handleClick:");
    console.log("counter (state, NGAY LÚC NÀY)   :", counter, "(chưa tăng ngay vì setState là async)");
    console.log("counterRef.current (ref)        :", counterRef.current, "(đã tăng)");
    console.log("counterObj.current (biến thường):", counterObj.current, "(tăng nhưng sẽ mất ở lần render sau)");
    console.log("-----------");
  };

  console.log(">>> Trong render:");
  console.log("counter (state)                  :", counter);
  console.log("counterRef.current (ref)        :", counterRef.current);
  console.log("counterObj.current (biến thường):", counterObj.current, "(luôn 0 mỗi lần render)");
  console.log("-----------");

  return (
    <>
      <p>State counter: {counter}</p>
      <p>Ref counter: {counterRef.current}</p>
      <p>Obj counter (reset mỗi render): {counterObj.current}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default UseRef;
