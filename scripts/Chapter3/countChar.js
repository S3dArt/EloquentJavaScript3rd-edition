"use strict"

function countBs(str){
    let countChar = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == "B"){
            countChar++;
        }
    }
    return countChar;

}

console.log(countBs("sdafBBBSsdqwrqwSsdbb"));

function countChar(str, char){
    let countChar = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            countChar++;
        }
    }
    return countChar;
}

console.log(countChar("dsdsdsQQQQQQdfsgs", "Q"));