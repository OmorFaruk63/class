// Calculate the sum of numbers received in a comma delimited string
// let str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"
// let a = str.split(',')
// let b = 0
// for (let s of a) {
//     b += Number(s)
// }
// console.log(b);

// ------------------------2nd mathod------------------------
// console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
// function sumCSV(s)
// {
//     var ar = s.split(",");
//     var sum = 0;
//     for(var n of ar)
//     {
//         sum += parseFloat(n);
//     }
//     return sum;
// }
//------ Create a function that will return the number of words in a text-------------

// let text = "m/y n?am?e {is} om=or.< fa\r/?uk ";
// let a = '';
// let arr = [];
// let separators = [" ", "/", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")", ">", "<", "{", "}", "[", "]", "="];
// for (let b of text) {
//     if (!separators.includes(b)) {
//         a += b;
//     } else if (b === " ") {
//         arr.push(a)
//         a = '';
//     }
// }
// console.log(arr);

// ----------------------rever string (if string up to  5)---------------- 
// const array = 'omor farku is a kind man ';
// let a = array.split(' ')
// let c = '';
// let reverseStr = []
// for (let b of a) {
//     if (b.length == 5) {
//         for (let i = b.length - 1; i >= 0; i--) {
//             c += b[i]
//         }
//         reverseStr.push(c)
//     } else {
//         reverseStr.push(b)
//     }
// }
// let restr = reverseStr.join(' ')
// console.log(restr);
// // console.log(reverseStr);

// ----------------------------------------------
// 1)  const str = "abcdefghijklmnopqrstuvwxyz"
//         replace all the vowel with comma(,)
//         //expected ans: ",bcd,fgh,jklmn,pqrst,vwxyz"

// const str = "abcdefghijklmnopqrstuvwxyz"
// const str2 = "aeiou"
// let strKoma = '';
// for (let a of str) {
//     if (str2.includes(a)) {
//         strKoma += ','
//     }
//     else {
//         strKoma += a
//     }
// }
// console.log(strKoma);

// ------------------------------------------------
// 2) const n = 2
//     find the next even numbers up to 10
//     expected ans: 4,6,8,10

// function even(n, f) {

//     for (let i = n; i <= f; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }

// }
// even(20, 30);


// ----------------------------------------------------------------
// 3) const array = [5,2,9,8,1,7]
//     get the sum of the lowest and the highest number of the given array.
//     //expected ans: 10

// const array = [5, 2, 9, 8, 1, 7]
// let x = Math.max(...array)
// let y = Math.min(...array)

// console.log(x +y);

// ----------------------------------------------------------------
// 4) const arrayOdd = [1,3,5,7,9]
//     const arrayEven = [2,4,6,8,10]
//     make an array from the given arrays. and the value should place small to large.
//     //expected ans: [1,2,3,4,5,6,7,8,9,10]

// const arrayOdd = [1, 3, 5, 7, 9]
// const arrayEven = [2, 4, 6, 8, 10]
// let arr = []
// for (let i = 0; i < arrayEven.length; i++) {
//     arr.push(arrayEven[i])
// }
// for (let i = 0; i < arrayOdd.length; i++) {
//     arr.push(arrayOdd[i])
// }
// let resut = arr.sort(function (a, b) {
//     return a - b
// })
// console.log(arr);

// ----------------------------------------------------------------
// 5) const object = {
//     brand: "apple",
//     model:"15 pro",
//     variant: [128,256,512]
//     price: [500,800,650]
// }
// find the lowest variant for the lowest price input
//expected ans: price 500 = 128, price: 650 = 256; price: 800 = 512

// const object = {
//     brand: "apple",
//     model: "15 pro",
//     variant: [128, 256, 512,128, 256, 512,128, 256, 512,128, 256, 512,],
//     price: [500, 800, 650,500, 800, 650,500, 800, 650,500, 800, 650,]
// }
// console.log(`Price ${object.price[0]} = ${object.variant[0]}`);
// console.log(`Price ${object.price[1]} = ${object.variant[2]}`);
// console.log(`Price ${object.price[2]} = ${object.variant[1]}`);

// console.log(`Price : ${object.price[0]} = ${object.variant[0]},  Price : ${object.price[1]} = ${object.variant[2]},
// Price : ${object.price[2]} = ${object.variant[1]}`);


// "Create a function that will capitalize the first letter of each word in a text"
// const str = "Create a function that will capitalize the first letter of each word in a text";
// // str.in
// const strSplit = str.split(' ')
// function fun(strSplit) {
//     let arr = [];
//     for (let word of strSplit) {
//         var upperWord = word.indexOf(0).toUpperCase();
//         var r = word.slice(0)
//         arr.push(upperWord + r);
//     }
//     return arr.join(' ')
// }
// console.log(fun(strSplit));
