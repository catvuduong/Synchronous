// let tinhDienTich = (a, b, h) => ((a + b) * h) / 2;
// let total = tinhDienTich(2, 3, 2);

// console.log(total);

let cong = (a, b, callBack) => {
    setTimeout(() => {
        if (typeof (a) !== "number" || typeof (b) !== "number")
            return callBack(new Error("tham so phai la so!"));
        callBack(undefined, a + b);
        // console.log(a + b);
    }, 2000)
};
// let sub = cong(2, 3);
// let h = 2;

// tinhDienTich = (sub, h) => {
//     console.log(sub * h);
// }
// tinhDienTich(sub, h);



// cong("2", 3, (err, result) => {
//     if (err) {
//         return console.log(err + "");
//         console.log("Tong", result);
//     };

// });

let nhan = (a, b, callBack) => {
    setTimeout(() => {
        if (typeof (a) !== "number" || typeof (b) !== "number")
            return callBack(new Error("tham so phai la so!"))
        callBack(undefined, a * b)
    }, 2000)
}

let chia = (a, b, callBack) => {
    setTimeout(() => {
        if (typeof (a) !== "number" || typeof (b) !== "number")
            return callBack(new Error("tham so phai la so!"))
        callBack(undefined, a / b)
    }, 2000)
}

let tinhDienTich = (a, b, h, callBack) => {
    cong(a, b, (err, result) => {
        //result = 5 // neu no da cong duoc
        if (err) return console.log(err + ""); // nen nho them chuoi neu khong no log ra cuc tham so
        nhan(result, h, (err, result) => {
            //result = 10
            if (err) return console.log(err + "");
            chia(result, 2, (err, result) => {
                if (err) return console.log(err + "")
                callBack(err, result)
            });
        });
    });
};

tinhDienTich(1, 3, "123423", (err, result) => {
    if (err) return console.log(err + "");
    console.log("kq", result);
})

//cool

//es5

