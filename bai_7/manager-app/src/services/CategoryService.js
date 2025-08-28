export const getListCategory = async () => {
    const respon = await fetch("http://localhost:3001/category")
    const result = await respon.json();
    return result;
}