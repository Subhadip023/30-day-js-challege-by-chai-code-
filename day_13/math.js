//  function add(n1,n2) {return n1+n2}
//  function mul(n1,n2) {return n1*n2}
//  function sub(n1,n2) {return n1-n2}
//  function div(n1,n2) {return n1/n2}


//  export{
//     add,
//     mul,
//     sub,
//     div
//  }



export const PI = 3.14159;

export function add(n1, n2) {
    return n1 + n2;
}

export function subtract(n1, n2) {
    return n1 - n2;
}

export function multiply(n1, n2) {
    return n1 * n2;
}

export function divide(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    } else {
        throw new Error("Division by zero");
    }
}
