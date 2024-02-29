console.log("hello world")




let a = [1, -4, 33,2];

let b: string = "";


for(let i = 0; i < a.length; i++) {
    if(a[i] > 0) {
         b += a[i].toString()
        }
    }
    console.log(b)