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

// let tinhDienTich = (a, b, h) => {
//     return cong(a, b)
//         .then(result => nhan(result, h))
//         .then(result => chia(result, 2))
// }

// tinhDienTich(2, 3, 2).then(result => {
//     console.log("KQ:", result);
// })