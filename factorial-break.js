function factorial(num) {
    let result = 1;
    let i = 1;
    while (true) {
        if (i > num) {
            break;
        }
        result = result * i;
        i++;
    }
    return result;
}
console.log(factorial(10));