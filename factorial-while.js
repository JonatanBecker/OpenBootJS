function factorial(num) {
    let result = 1;
    let i = 1;
    while (i <= num) {
        result = result * i;
        i++;
    }
    return result;
}
console.log(factorial(10))
