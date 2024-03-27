
console.log("hello world");


// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// @MITASK

function calculate(str: string) {
    let num = str.split("+").map(Number);
    let count = 0;
    for (let i = 0; i < num.length; i++) {
        count += num[i];
    }

    return count;
}

console.log(calculate("1+3"));












/* Validation:
    Frontend validation
    Backend validation
    Database validation
*/


/* cookies:
request join (requestga qo'shilib oladi)
self destroy (o'zini o'zi yo'q qilish)
*/



/* FD(frontend development):
    Traditional FD => SSR (Admin) => EJS
    Modern FD => SPA (User's application) => REACT
*/


/*  Request:
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







