// let addition = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number") {
//                 return reject(new Error("params have to be number"));
//             };
//             resolve(a + b);
//         }, 2000);
//     });
// };
// let multiplication = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number") {
//                 return reject(new Error("params have to be number"));
//             };
//             resolve(a * b);
//         }, 2000);
//     });
// };
// let divide = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof a !== "number" || typeof b !== "number") {
//                 return reject(new Error("params have to be number"));
//             };
//             resolve(a / b);
//         }, 2000);
//     });
// };

// let area = async (a, b, h) => {
//     let ab = await addition(a, b);
//     let abh = await multiplication(ab, h);
//     let result = await divide(abh, 2);
//     console.log("The area: " + result);
// };

// area(1, 2, 3);