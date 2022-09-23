// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str = "abcadeecfb";
let s = new Set(str);
console.log(s);
let newStr = Array.from(s).join('')
console.log(newStr);



// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

// (  USING SET )
let str = "abcadeecfb";
let set = new Set(str);
for(let i of set){
    let count = 0;
    for(let j=0;j<str.length;j++){
        if(i==str[j]){
            count++;
        }
    }
    console.log(`${i} = ${count}`);
}



// ( USING MAP )

let str = "abcadeecfb";
let mp = new Map();
for( let i=0;i<str.length;i++){
    if(mp.has(str[i])==true){
        let value = mp.get(str[i])
        mp.set(str[i] , value+1)
    }else{
        mp.set(str[i] , 1)

    }
}
console.log(mp);

