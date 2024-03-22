

console.log("hello world");

// O - TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
//     MASALAN: calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]) return 45

function calcNumbers(arr: Array<any>): Number {
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == "number") {
            result+= arr[i];
        }
    }
    return result;
}

console.log(calcNumbers([10, "10", { son: 10 }, true, 35]));











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







