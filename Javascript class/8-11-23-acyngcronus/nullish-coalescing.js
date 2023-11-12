// nullish coalescing set value object 
let obj = {
    a: 10,
    b: {
        c: {
            d: {
                e: 'hello'
            }
        }
    }
}

console.log(obj?.b?.c?.d);