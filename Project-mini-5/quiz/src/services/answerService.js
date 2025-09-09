import { getCookie } from "../helpers/cookie";
import { get } from "../utils/request";

export const getAnswerByUserId = async () => {
    const userID = getCookie("id")
    const result = await get (`answers?userID=${userID}`);
    return result;
}

