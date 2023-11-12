



// let count = 0;
// let sub = 0;

// console.log(sub, count);


// for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a < ary.length; a++) {
//         if (((ary[a] == arr[i]) && (arr[i + 1] == ary[a + 1])) && ((ary[a + 2] == arr[i + 2]) && (arr[i + 3] + ary[a + 3]))) {
//             console.log(ary[a]);
//         }
//     }

// }


// function fun(arr, ary) {
//     for (let a of arr) {
//         Loop: for (let b of a) {
//             for (let c of ary) {
//                 for (let d of c) {
//                     if (d == b) {
//                         count++
//                         console.log(d);
//                         if (count == 3) {
//                             return
//                         }
//                         continue Loop
//                     } else {
//                         count = 0
//                     }
//                 }
//                 sub++
//             }
//         }
//     }
// }
// fun(arr, ary)


// let count = 0;
// let str1 = 'omokorimfaru';
// let str2 = 'korim';
// loop: for (let i = 0; i < str1.length; i++) {
//     let index = i
//     let firstindex = i
//     for (let n = 0; n < str2.length; n++) {
//         if (str2[n] == str1[firstindex]) {
//             firstindex += 1;
//         } else {
//             continue loop
//         }
//     }
//     console.log(index);
// }


// let a = 3
// console.log(a);

// a++
// console.log(a);

// let b = a
// console.log(b);
// b++
// console.log(b);
// console.log(a);
let count = 0;
let countt = 0;

let div = document.getElementById('child')
// console.log(div);
document.addEventListener('keypress', function (e) {
    // console.log(e.key);
    if (e.key === 's') {
        // console.log(e);
        count += 7
        div.style.top = count + 'px'
    } else if (e.key === 'd') {
        // console.log(e);
        countt += 7
        div.style.left = countt + 'px'
    }
    else if (e.key === 'w') {
        // console.log(e);
        count -= 7
        div.style.top = count + 'px'
    }
    else if (e.key === 'a') {
        // console.log(e);
        countt -= 7
        div.style.left = countt + 'px'
    }
})