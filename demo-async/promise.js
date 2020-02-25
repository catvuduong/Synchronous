let addition = (a, b) => {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                return reject(new Error("params have to be number"));
            };
            resovle(a + b);
        }, 2000);
    });
};
let multiplication = (a, b) => {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                return reject(new Error("params have to be number "));
            };
            resovle(a * b);
        }, 2000);
    });
};
let divide = (a, b) => {
    return new Promise((resovle, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                return reject(new Error("params have to be number"));
            };
            resovle(a / b);
        });
    });
};

let area = (a, b, h) => {
    return addition(a, b)
        .then(res => multiplication(res, h))
        .then(res => divide(res, 2))
};

area(1, 2, 3).then(res => {
    console.log("The area: " + res);
})