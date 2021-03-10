"use strict"

function range(start, stop, step = 1){
    let arrayNumber = [];
    if(start < stop){
        for(let i = start; i <= stop; i += step){
            arrayNumber.push(i);
        }  
    }
    else{
        for(let i = start; i >= stop; i += step){
            arrayNumber.push(i);
        }  
    }    
    return arrayNumber;
}

console.log(range(1, 10, 2));
console.log(range(1,10));
console.log(range(5,2, -1));

function sum(arrayNumber){
    let sum = 0;
    for(let i = 0; i < arrayNumber.length; i++){
        sum += arrayNumber[i];
    }
    return sum;
}


 console.log(sum(range(1,1024)));


