
console.log("hello world");


// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// @MITASK



function hasProperty(obj: object, str: string) { 
    return str in obj;
}

console.log(hasProperty({name: "BMW", model: "M3"}, "model"));








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







