//Create list of ints from 1 to 5, Haskell equivalent [1..5]
function arrFunc(a, b){
    let arr = [];
    for (let i = a; i<=b; i++) {
        arr.push(i);
    }
    return arr;    
}

// updated applicatorFunc
function applicatorFunc(inpFunc, a, b, s){
    const arr = inpFunc(a, b); // passing a and b here
    // calculating sum using "reduce"
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if(s=='s'){
        return sum;
    }
    else{        
        return sum/arr.length;
    }
}
// calling it with numbers 1 and 10
let x = applicatorFunc(arrFunc, 1, 10, 's');
console.log(x);