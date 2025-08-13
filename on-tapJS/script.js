//--Default Param
// const sum = (a,b) => {
//     return a+b;
// }

// const sum = (a,b) => {
//     a = a || 0;
//     b = b || 0;
//     return a+b;
// }
// console.log(sum(10,20))


// --Spread syntax
// const array1= [1,2,3];
// const array2= [3,4,5];
// const array3= [1,2,3,4,5,6];
// const array4= [...array1,...array2];

// console.log(...array1);
// console.log(...array2);
// console.log(array3);
// console.log(array4);



// let infor = {
//     fullname: "Vo Quoc Dat",
//     email : "datvq.24it@vku.udn.vn"
// };

// let infoUpdate = {
//     phone: "0787540572",
//     age: 18
// }
// let infoFinal = {
//     ...infor,
//     ...infoUpdate

// }
// console.log(infoFinal);

// --Rest parameters
// const sum = (a,b, ...number) => {
//     console.log(number);
//     const result = number.reduce((total,item) => {
//         return total = item;

//     }, 0)
//     return result;
// }
// console.log(sum(10,20,30,40,50))



// --Destructuring
// let infoUser = {
//     fullName : " Vo Quoc Dat",
//     email : "datvq.24it@vku.udn.vn"
// }

// const {fullName,email} = infoUser;
// console.log(fullName);
// console.log(email)

