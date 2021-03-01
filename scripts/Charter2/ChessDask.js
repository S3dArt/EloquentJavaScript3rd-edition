// let sizeHigh = 8;
// let sizeWidth = 8;
// let repeatStrEven = " #";
// let repeatStrOdd = "# ";

// for(let i = 0; i < sizeHigh; i++){
//     if(i % 2 == 0){
//         console.log(repeatStrEven.repeat(sizeWidth / 2));
//     } else {
//         console.log(repeatStrOdd.repeat(sizeWidth / 2));
//     }
// }

let sizeBoard  = 8;
let hashSymbol = "#", spaceSymbol = " ";

for(let i = 1; i < sizeBoard; i++){
    let output = "";
    while(output.length != sizeBoard){
        if(i & 2 != 0){
            if((output.length + 1) % 2 != 0)
                output += spaceSymbol;
            else
                output += hashSymbol;
        }
        else{
            if((output.length + 1) % 2 != 0)
                output += hashSymbol;
            else
                output += spaceSymbol;
        }
    }
    console.log(output)
}