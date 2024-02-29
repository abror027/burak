console.log("hello world")

// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 33, 2]) return qiladi "12"

let a = [1, -4, 33, 2];
let b: string = "";

function getPositive(a: Array<number>) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            b += a[i];
        }
    }
    return b;
}

console.log(getPositive(a));
