// let addition = (a, b, callBack) => {
//     setTimeout(() => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             return callBack(new Error("params have to be number"));
//         };
//         callBack(undefined, a + b);
//     }, 2000);
// };

// let multiplication = (a, b, callBack) => {
//     setTimeout(() => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             return callBack(new Error("params have to be number"));
//         };
//         callBack(undefined, a * b);
//     }, 2000);
// };

// let divide = (a, b, callBack) => {
//     setTimeout(() => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             return callBack(new Error("params have to be number"));
//         };
//         callBack(undefined, a / b);
//     }, 2000);
// };

// let area = (a, b, h, callBack) => {
//     addition(a, b, (err, res) => {
//         if (err) {
//             console.log(err + "");
//         };
//         multiplication(res, h, (err, res) => {
//             if (err) {
//                 console.log(err + "");
//             };
//             divide(res, 2, (err, res) => {
//                 if (err) {
//                     console.log(err + "");
//                 };
//                 callBack(err, res);
//             });
//         });
//     });
// };

// area(1, 2, 3, (err, res) => {
//     if (err) {
//         console.log(err + "");
//     };
//     console.log("The area: " + res);
// });