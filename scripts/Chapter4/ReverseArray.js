"use strict"

function reverseArray(array){
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr){
    let halfArr = Math.floor(arr.length / 2);

    for(let i = 0; i < halfArr; i++){
        let temp = arr[arr.length - 1 - i];
        arr[arr.length -  1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}