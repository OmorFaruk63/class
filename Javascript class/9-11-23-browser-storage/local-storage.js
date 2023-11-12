function fun(b) {
    let a = 10;
    return function fun2() {
        return a + b
    }
}
console.dir(fun(5)());