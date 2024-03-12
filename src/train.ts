console.log("hello world");
console.log("**************************")



// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// @MITASK


let count: number = 0;
let wovels: string = "aeiouy";

function countVowels(tex: string): number {
    for (let i = 0; i < tex.length; i++) {
        if (wovels.includes(tex[i].toLowerCase())) {
            count++
        }
    }
    return count
}


console.log(countVowels("gubduman"));













// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// @MITASK


// function findLongestWord(text: string) {
//     const buk: string[] = text.split(" ");
//     let longTxt = "";
//     for (let i = 0; i < buk.length; i++) {
//         if (buk[i].length > longTxt.length) {
//             longTxt = buk[i];
//         }
//     }
//     return longTxt;
// }


// console.log(findLongestWord("O‘z navbatida aholi uchun elektromobillarni xarid qilishni rag‘batlantirish"))




// I-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

// @MITASK

// function digit(getDigit: string) {
//     let buk = "";
//     for (let i = 0; i < getDigit.length; i++) {
//         let g = getDigit.charAt(i);
//         if (Number(g) || g === "0") {
//             buk += g;
//         }
//     }
//     return buk;
// }

// const result = digit("s8d98d74as209");
// console.log("home", result);







/* cookie
request join (requestga qo'shilib oladi)
self destroy (o'zini o'zi yo'q qilish)
*/



/*
                FD(frontend development)

    Traditional FD => SSR (Admin) => EJS
    Modern FD => SPA (User's application) => REACT
*/


/*
    Traditional Api
    Rest Api
    GraphQL Api
*/


/* Project Standarts:
    -Logging standarts
    -Naming standarts
        function, method, varible => camel case orqali  goHome
        class => PASCAL case    MemberService
        folder, file => kebab case    book-name
        css => snake case       button_style
    -Erorr handling

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
