// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [a, b] = arr
// console.log(a)


// let obj = {
//     name : 'omor',
//     skill :{
//         computar: 'exel',
//         programing:{
//             html:'tag',
//             js:{
//                 array : 'push()',
//                 mathod:''
//             }
//         }
//     }
// }


// const phones = [
//     {
//         brand: "Apple",
//         name: "iPhone",
//         model: "15 Pro Max",
//         price: 999,
//         variant: ["6/256", "8/512", "8/1tb"]
//     },
//     {
//         brand: "Samsung",
//         name: "Galaxy",
//         model: "S24 Ultra",
//         price: 999,
//         variant: ["8/256", "8/512", "12/1tb"]
//     },
//     {
//         brand: "Google",
//         name: "Pixel",
//         model: "8 pro",
//         price: 999,
//         variant: ["6/128", "8/256", "8/512"]
//     },
//     {
//         brand: "Asus",
//         name: "Zenfone",
//         model: "Zenfone 1 vi",
//         price: 999,
//         variant: ["8/128", "8/256"]
//     },
//     {
//         brand: "Honor",
//         name: "magic",
//         model: "magic 90",
//         price: 799,
//         variant: ["6/128", "8/256"]
//     }
// ]
// for (const phone of phones) {
//     const { brand, name, model, price, variant: [a, s, ...d] } = phone
//     console.log(brand);
//     console.log(name);
//     console.log(model);
//     console.log(price);
//     console.log(a, s, d,);
// }



// for (let a of phones) {
//     if (typeof a === Array.isArray()) // wrong code fix naxt time
//     {
//         for (let b of a) {
//             console.log(b, 'inside array');
//         }
//     } else if (typeof a === 'object') {
//         for (let b in a) {
//             console.log(a[b], 'inside object');
//         }
//     } else {
//         console.log(a);
//     }
// }
