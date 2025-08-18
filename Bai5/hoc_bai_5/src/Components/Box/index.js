import { memo } from "react";
function Box () {
    console.log("render box")
    return (
        <>
        Box
        </>
    )
}
export default memo(Box);