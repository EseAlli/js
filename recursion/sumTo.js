// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Using a for loop
function sumTo(n){
    let sum = 0
    for(let x = n; x > 0; x-- ){      
        sum = sum + x
    }
    return sum
}

// Using a recursion
function sumToRecur(n){
    let sum = 0
    if (n > 0){
        if (n === 1){
            sum = 1
        }
        else{
            sum = n + sumToRecur(n - 1)
        }   
    }

    return sum
}

// Using the arithmetic progression formula
function sumToAri(n){
    let sum = n * (1 + n) / 2
    return sum
}
