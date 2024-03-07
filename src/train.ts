console.log("hello world")


// I-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// @MITASK

function digit(getDigit: string) {
    let buk = "";
    for (let i = 0; i < getDigit.length; i++) {
        let g = getDigit.charAt(i);
        if (Number(g) || g === "0") {
            buk += g;
        }
    }
    return buk;
}

const result = digit("s8d98d74as209");
console.log("home", result);
















/* Project Standarts:
    -Logging standarts
    -Naming standarts
        function, method, varible => camel case orqali  goHome
        class => PASCAL case    MemberService
        folder, file => kebab case    book-name
        css => snake case       button_style
    -Erorr handling

*/

/*
Traditional Api
Rest Api
GraphQL Api
*/


















// // H-TASK:

// // shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// // MASALAN: getPositive([1, -4, 33, 2]) return qiladi "12"

// let a = [1, -4, 33, 2];
// let b: string = "";

// function getPositive(a: Array<number>) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > 0) {
//             b += a[i];
//         }
//     }
//     return b;
// }

// console.log(getPositive(a));
