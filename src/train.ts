console.log("hello world");

// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

function palindromCheck(inpStr: string) {
    for (let i = 0; i < inpStr.length / 2; i++) {
        if (inpStr.toLowerCase().charAt(i) !== inpStr.toLowerCase().charAt(inpStr.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

// Menda katta L va kichik l bir xil qiymatni qabul qiladi. Hotirjam holda meni run qiling *_*

console.log(palindromCheck("22Lul55luL22"));












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







