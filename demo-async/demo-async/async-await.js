// let cong = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number")
//                 return reject(new Error("tham so phai la so!"));
//             resolve(a + b);

//             // console.log(a + b);

//         }, 2000)
//     })
// }
// let nhan = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number")
//                 return reject(new Error("tham so phai la so!"));
//             resolve(a * b);

//             // console.log(a + b);

//         }, 2000)
//     })
// }
// let chia = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number")
//                 return reject(new Error("tham so phai la so!"));
//             resolve(a / b);

//             // console.log(a + b);

//         }, 2000)
//     })
// }
// //es8
// let tinhDienTich = async (a, b, h) => {
//     let ab = await cong(a, b);
//     let abh = await nhan(ab, h);
//     let result = await chia(abh, 2)
//     console.log(result);
// }

// tinhDienTich(2, 3, 2);

