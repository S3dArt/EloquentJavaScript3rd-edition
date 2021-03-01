"use strict"

// for(let i = 1; i < 100; i++){
//     if(i % 3 == 0 && i % 5 != 0){
//         console.log("Fizz");
//     }
//     else{
//         if(i % 5 == 0 && i % 3 != 0){
//             console.log("Buzz");
//         }
//         else{
//             if(i % 5 == 0 && i % 3 == 0){
//                 console.log("FizzBuzz");
//             }
//             else{
//                 console.log(i);
//             }
//         }
//     }
// }

for(let i = 0; i < 100; i++){
    let strFizzBuzz = "";
    if( i % 3 == 0){
        strFizzBuzz += "Fizz";
    }
    if(i % 5 == 0){
        strFizzBuzz += "Buzz";
    }
    if(i % 3 != 0 && i % 5 != 0){
        strFizzBuzz += i;
    }
    console.log(strFizzBuzz);
}